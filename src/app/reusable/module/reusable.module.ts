import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { NavV2Component } from '../components/nav-v2/nav-v2.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavV4Component } from '../components/nav-v4/nav-v4.component';



@NgModule({
  declarations: [
    NavV2Component,
    NavV4Component,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavV2Component,
    NavV4Component,
    FooterComponent
  ]
})
export class ReusableModule { }
