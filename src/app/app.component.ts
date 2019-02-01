import { Component, OnInit } from '@angular/core';
import { AdalService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Worklists';
  constructor(private azure: AdalService) { }

  public ngOnInit(): void {   
  
    if(!this.azure.user.authenticated) {
      this.azure.login();
    }
  }
}