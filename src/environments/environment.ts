// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpointBase: 'https://stewardappsuite.onmicrosoft.com/',
  redirectUri: 'http://localhost:62453/azure',

  env: 'Dev',
  clientId: 'e6c6b774-897b-4183-80e7-3a2092a275c0', // AppSuiteDashboardDev ApplicationID
  WorklistsApi: 'https://worklistsapidev.stewardappsuite.com',
  LosApi: 'https://losapidev.stewardappsuite.com',
  LaborApi: 'https://laborapidev.stewardappsuite.com',
  UserAccessControlApi: 'https://useraccesscontrolapidev.stewardappsuite.com',
  SupplyChainApi: 'https://supplychainapidev.stewardappsuite.com',

  loadFrameTimeout: 15000,
  cacheLocation: 'localStorage'
};

(window as any).Logging = {
  level: 1,
  log: function (message) {
    console.log(message);
  },
  piiLoggingEnabled: false
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
