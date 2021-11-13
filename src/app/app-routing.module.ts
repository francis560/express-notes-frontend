import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { DeactivateGuard } from './guards/deactivate.guard';



import { Error404Component } from './components/error404/error404.component';
import { VideoCallComponent } from './video/pages/video-call/video-call.component';



const routes: Routes = [

  { path: '', loadChildren: () => import('./homepage/modules/homepage.module').then(m => m.HomepageModule), canActivate: [AuthGuard] },

  { path: 'editAccount', loadChildren: () => import('./auth/modules/edit-account.module').then(m => m.EditAccountModule), canActivate: [AuthGuard] },

  { path: 'home', loadChildren: () => import('./auth/modules/home.module').then(m => m.HomeModule), canActivate: [DeactivateGuard] },

  { path: 'privacy-policy', loadChildren: () => import('./privacy/modules/privacy-policy.module').then(m => m.PrivacyPolicyModule), canActivate: [DeactivateGuard] },

  { path: 'privacyPolicy', loadChildren: () => import('./privacy/modules/privacy.module').then(m => m.PrivacyModule), canActivate: [AuthGuard] },

  { path: 'signin', loadChildren: () => import('./auth/modules/signin.module').then(m => m.SigninModule), canActivate: [DeactivateGuard] },

  { path: 'create', loadChildren: () => import('./auth/modules/create-account.module').then(m => m.CreateAccountModule), canActivate: [DeactivateGuard] },
  
  { path: 'teacherAccount', loadChildren: () => import('./auth/modules/teacher-account.module').then(m => m.TeacherAccountModule), canActivate: [DeactivateGuard] },
  
  { path: 'studentAccount', loadChildren: () => import('./auth/modules/student-account.module').then(m => m.StudentAccountModule), canActivate: [DeactivateGuard] },
  
  { path: 'group/:id', loadChildren: () => import('./group/modules/group.module').then(m => m.GroupModule), canActivate: [AuthGuard] },
  
  { path: 'recover-password', loadChildren: () => import('./auth/modules/recover-password.module').then(m => m.RecoverPasswordModule), canActivate: [DeactivateGuard] },

  { path: 'watch/:id', component: VideoCallComponent },
  
  { path: 'dashboard/:id', loadChildren: () => import('./dashboard/modules/dashboard.module').then(m => m.DashboardModule) },

  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
