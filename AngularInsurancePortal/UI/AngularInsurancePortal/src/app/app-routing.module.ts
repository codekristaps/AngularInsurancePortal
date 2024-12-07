import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceListComponent } from './features/insurance/insurance-list/insurance-list.component';
import { AddInsuranceComponent } from './features/insurance/add-insurance/add-insurance.component';

const routes: Routes = [
  {
    path: 'admin/insurances',
    component: InsuranceListComponent
  },
  {
    path: 'admin/insurances/add',
    component: AddInsuranceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
