import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReusableModule } from '../../reusable/module/reusable.module';



import { SigninComponent } from '../pages/signin/signin.component';



const routes: Routes = [
  
  { path: '', component: SigninComponent }

]



@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ReusableModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class SigninModule { }
