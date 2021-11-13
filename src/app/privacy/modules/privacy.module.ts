import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReusableModule } from '../../reusable/module/reusable.module';



import { PrivacyComponent } from '../pages/privacy/privacy.component';




const routes: Routes = [
  
  { path: '', component: PrivacyComponent }

]



@NgModule({
  declarations: [
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    ReusableModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class PrivacyModule { }
