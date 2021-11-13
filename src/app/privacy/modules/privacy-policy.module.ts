import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReusableModule } from '../../reusable/module/reusable.module';



import { PrivacyPolicyComponent } from '../pages/privacy-policy/privacy-policy.component';



const routes: Routes = [
  
  { path: '', component: PrivacyPolicyComponent}

]



@NgModule({
  declarations: [
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    ReusableModule,
    RouterModule.forChild(routes)
  ]
})
export class PrivacyPolicyModule { }
