import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReusableModule } from '../../reusable/module/reusable.module';



import { CreateAccountComponent } from '../pages/create-account/create-account.component';



const routes: Routes = [
  
  { path: '', component: CreateAccountComponent }

]



@NgModule({
  declarations: [
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    ReusableModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class CreateAccountModule { }
