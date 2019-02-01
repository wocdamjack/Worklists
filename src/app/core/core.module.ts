import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdalInterceptor } from './services';

/**
 * Core.Module.ts
 * This module should contain singleton services, single-instance components,
 * and export any third-party modules needed within AppModule (like AdalService).
 * 
 * This module acts as a singleton extension of AppModule.
 */
@NgModule({
  imports: [ CommonModule, HttpClientModule ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AdalInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
