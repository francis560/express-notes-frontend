import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanActivate {

  constructor (private auth: AuthService, private router: Router) {}

  canActivate (): boolean {
    if (!this.auth.loggedIn()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
  
}
