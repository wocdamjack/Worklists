import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor } from "@angular/common/http";
import { HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { mergeMap, catchError } from 'rxjs/operators'
import { of } from 'rxjs';

import { AdalService } from './adal.service';

@Injectable({ providedIn: 'root' })
export class AdalInterceptor implements HttpInterceptor {

  constructor(private auth: AdalService) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if the endpoint is not registered, then pass the request as is
    const resource = this.auth.getResourceForEndpoint(request.url);
    if(!resource) {
      return next.handle(request);
    }

    if(!this.auth.user.authenticated) {
      throw new Error('Cannot send request to a registered endpoint, if the current user is not logged in.');
    }

    // if the endpoint is registered, acquire and inject token
    return this.auth.acquireToken(resource).pipe(
      mergeMap((token: string) => {
        const authorizedRequest = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + token)
        });

        return next.handle(authorizedRequest);
      }),
      catchError((error) => {
        this.auth.warn(`Can't perform http request for ${resource}: ${error}`);
        return of(error);
      })
    );
  }
}