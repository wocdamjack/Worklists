export const environment = {
  production: true,
  endpointBase: 'https://stewardappsuite.onmicrosoft.com/',
  redirectUri: 'https://appsuitedashboarddev.azurewebsites.net/azure',
  
  env: 'Prod',
  clientId: '3370f767-cea1-4591-a3ad-d1f3c8902f48', // AppSuiteDashboardProd ApplicationID
  WorklistsApi: 'https://worklistsapiprod.stewardappsuite.com',
  LosApi: 'https://losapiprod.stewardappsuite.com',
  LaborApi: 'https://laborapiprod.stewardappsuite.com',
  UserAccessControlApi: 'https://useraccesscontrolapiprod.stewardappsuite.com',
  SupplyChainApi: 'https://supplychainapiprod.stewardappsuite.com',

  loadFrameTimeout: 15000,
  cacheLocation: 'localStorage'
};