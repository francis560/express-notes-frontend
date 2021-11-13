import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReusableModule } from '../../reusable/module/reusable.module';



import { HomeComponent } from '../pages/home/home.component';
import { NavV1Component } from '../components/nav-v1/nav-v1.component';




const routes: Routes = [
  
  { path: '', component: HomeComponent}

]



@NgModule({
  declarations: [
    HomeComponent,
    NavV1Component
  ],
  imports: [
    CommonModule,
    ReusableModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
