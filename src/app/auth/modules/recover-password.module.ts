import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReusableModule } from '../../reusable/module/reusable.module';



import { RecoverPasswordComponent } from '../pages/recover-password/recover-password.component';
import { EnterCodeComponent } from '../components/enter-code/enter-code.component';



const routes: Routes = [
  
  { path: '', component: RecoverPasswordComponent }

]



@NgModule({
  declarations: [
    RecoverPasswordComponent,
    EnterCodeComponent
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
export class RecoverPasswordModule { }
