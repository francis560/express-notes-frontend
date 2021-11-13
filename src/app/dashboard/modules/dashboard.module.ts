import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts'
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';



import { SetChartDataService } from '../../services/set-chart-data.service';



import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { DashboardChartComponent } from '../pages/dashboard-chart/dashboard-chart.component';
import { DashboardWelcomeComponent } from '../pages/dashboard-welcome/dashboard-welcome.component';



const routes: Routes = [
  
  { path: '', component: DashboardComponent, children: [

    //{ path: ':id', component: DashboardWelcomeComponent },
    
    { path: 'exams', loadChildren: () => import('./exams.module').then(m => m.ExamsModule)}

  ] },
  
  //{ path: '', redirectTo: '/_PageNotFound', pathMatch: 'full' }

]



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardChartComponent,
    DashboardWelcomeComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    DataTablesModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [SetChartDataService]
})
export class DashboardModule { }
