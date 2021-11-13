import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReusableModule } from '../../reusable/module/reusable.module';



import { StudentAccountComponent } from '../pages/student-account/student-account.component';



const routes: Routes = [
  
  { path: '', component: StudentAccountComponent }

]



@NgModule({
  declarations: [
    StudentAccountComponent
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
export class StudentAccountModule { }
