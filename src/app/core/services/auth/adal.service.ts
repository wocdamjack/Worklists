import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as AuthenticationContext from 'adal-angular/lib/adal'
import { AdalUser } from '../../models';
import { environment } from '../../../../environments/environment';


// import { AdalUser } from '@app/core/models';
// import { environment } from '@env/environment';

@Injectable({ providedIn: 'root' })
export class AdalService {

  readonly _context: AuthenticationContext;
  private _user: AdalUser;

  constructor() {
    this._context = new AuthenticationContext(this.config);
    this._user = this.getUserFromCache(this._context.config.loginResource);
  }

  public get user(): AdalUser {
    return this._user;
  }

  public isCallback(hash: string): boolean {
    return this._context.isCallback(hash);
  }

  public handleWindowCallback(hash: string): void {
    return this._context.handleWindowCallback(hash);
  }

  public login(): void {
    this._context.login();
  }

  public getResourceForEndpoint(url: string) {
    return this._context.getResourceForEndpoint(url);
  }

  public acquireToken(resource: string): Observable<string> {
    let self = this;
    return Observable.create(function (observer: any) {
      self._context.acquireToken(resource, function cb(error: any, token: any) {
        if (error) {
          observer.error(error);
        } else {
          observer.next(token);
        }
        observer.complete();
      });
    });
  }

  public warn(msg: string) {
    this._context.warn(msg);
  }

  private getUserFromCache(resource: string): AdalUser {
    const token = this._context.getCachedToken(resource);
    const cachedUser = this._context.getCachedUser();
    const isAuthtenticated = token !== null && token.length > 0;
    return new AdalUser(isAuthtenticated, cachedUser);
  }

  private get config() {
    const config = {
      clientId: environment.clientId,
      cacheLocation: environment.cacheLocation,
      loadFrameTimeout: environment.loadFrameTimeout,
      redirectUri: environment.redirectUri,
      endpoints: {
        [environment.WorklistsApi]: environment.endpointBase + 'AppSuiteWorklistsApi' + environment.env,
        [environment.LosApi]: environment.endpointBase + 'AppSuiteLosApi' + environment.env,
        [environment.LaborApi]: environment.endpointBase + 'AppSuiteLaborApi' + environment.env,
        [environment.UserAccessControlApi]: environment.endpointBase + 'AppSuiteUserAccessControlApi' + environment.env,
        [environment.SupplyChainApi]: environment.endpointBase + 'AppSuiteSupplyChainApi' + environment.env
      }
    };

    return config;
  }
}
