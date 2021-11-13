import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReusableModule } from '../../reusable/module/reusable.module';



import { TeacherAccountComponent } from '../pages/teacher-account/teacher-account.component';



const routes: Routes = [
  
  { path: '', component: TeacherAccountComponent }

]



@NgModule({
  declarations: [
    TeacherAccountComponent,
  ],
  imports: [
    ReusableModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class TeacherAccountModule { }
