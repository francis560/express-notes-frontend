import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  loggedIn () {
    return !!localStorage.getItem('token');
  }

  teacherAccount (value: any) {
    return this.http.post(this.url + '/signupTeacher', value);
  }

  studentAccount (value: any) {
    return this.http.post(this.url + '/signupStudent', value);
  }

  signin (value: any) {
    return this.http.post(this.url + '/signin', value);
  }

  updateAccount (value: any) {
    return this.http.post(this.url + '/updateAccount', value);
  }

  recoverPassword (value: any) {
    return this.http.post(this.url + '/recoverPassword', value);
  }
}
