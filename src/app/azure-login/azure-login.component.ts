import { Component, OnInit } from '@angular/core';

import { AdalService } from '@app/core/services';

@Component({
  selector: 'app-azure-login',
  templateUrl: './azure-login.component.html',
  styleUrls: ['./azure-login.component.scss']
})
export class AzureLoginComponent implements OnInit {
  public status: string;

  private iframe: boolean;

  constructor(private azure: AdalService) {
    this.iframe = window !== window.parent && !window.opener;
    this.azure.handleWindowCallback(window.location.hash);
  }

  public ngOnInit() : void {
    // redirect to main app page if this is the top-most window (a non-iframe)
    if(!this.iframe) {
      window.location.replace(location.origin); //  + location.hash
    }
  }
}
