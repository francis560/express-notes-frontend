import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataUserService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  
  getDataProfile () {

    const headers = new HttpHeaders({
      token: `${localStorage.getItem('token')}`
    });

    return this.http.get(this.url + '/profile', {headers});
  }

  groupCreate (value: any) {
    return this.http.post(this.url + '/groupCreate', value);
  }

  getGroupData (value: any) {
    return this.http.post(this.url + '/getGroupData', value);
  }

  deleteGroupData (value: any) {
    return this.http.post(this.url + '/deleteGroupData', value);
  }

  updateGroupData (value: any) {
    return this.http.post(this.url + '/updateGroupData', value);
  }

  exitGroup (value: any) {
    return this.http.post(this.url + '/exitGroup', value);
  }

  groupJoin (value: any) {
    return this.http.post(this.url + '/groupJoin', value);
  }

  getGroupMembers (value: any) {
    return this.http.post(this.url + '/getGroupMembers', value);
  }

  iconProfile (value: any) {
    return this.http.post(this.url + '/iconProfile', value);
  }

  coProfesor (value: any) {
    return this.http.post(this.url + '/coProfesor', value);
  }

}
