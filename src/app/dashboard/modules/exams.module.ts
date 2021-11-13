import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';




import { DashboardExamsComponent } from '../pages/dashboard-exams/dashboard-exams.component';




const routes: Routes = [
  
  { path: '', component: DashboardExamsComponent }

]



@NgModule({
  declarations: [
    DashboardExamsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class ExamsModule { }
