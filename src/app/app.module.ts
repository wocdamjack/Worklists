import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from './core/core.module';
import { AzureLoginComponent } from './azure-login/azure-login.component';
import { RadComponent } from './rad/rad.component';

import { LabComponent } from './lab/lab.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatCardModule, MatDividerModule } from '@angular/material';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { GridModule } from '@progress/kendo-angular-grid';
import 'hammerjs';



@NgModule({
  declarations: [
    AppComponent,
    AzureLoginComponent,
    RadComponent,
    LabComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    MatTableModule, MatCardModule, MatDividerModule,
    ChartsModule,
    GridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
