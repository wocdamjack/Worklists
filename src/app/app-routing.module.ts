import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadComponent } from './rad/rad.component';
import { LabComponent } from './lab/lab.component';

import { AzureLoginComponent } from './azure-login/azure-login.component';


const routes: Routes = [
  { path: '', redirectTo: 'rad', pathMatch: 'full' },
  // { path: 'care', component: CareComponent },
  // { path: 'consult', component: ConsultComponent },
  { path: 'rad', component: RadComponent },
  { path: 'lab', component: LabComponent },
  { path: 'azure', component: AzureLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
