import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



import { PaginaPrincipalComponent } from '../page/pagina-principal/pagina-principal.component';
import { NavV3Component } from '../components/nav-v3/nav-v3.component';
import { CountUsersPipe } from '../../pipes/count-users.pipe';
import { AvatarUserService } from '../../services/avatar-user.service';



const routes: Routes = [
  
  { path: '', component: PaginaPrincipalComponent}

]



@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    NavV3Component,
    CountUsersPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [AvatarUserService]
})
export class HomepageModule { }
