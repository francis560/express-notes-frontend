import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReusableModule } from '../../reusable/module/reusable.module';



import { EditAccountComponent } from '../pages/edit-account/edit-account.component';




const routes: Routes = [
  
  { path: '', component: EditAccountComponent}

]



@NgModule({
  declarations: [
    EditAccountComponent
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
export class EditAccountModule { }
