import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteDataService {

  private url = environment.URL;

  constructor(private http: HttpClient) { }

  noteCreate (value: any) {
    return this.http.post(this.url + '/createNote', value);
  }

  getNote (value: any) {
    return this.http.post(this.url + '/getNote', value);
  }

  editNote (value: any) {
    return this.http.post(this.url + '/editNote', value);
  }

  deleteNote (value: any) {
    return this.http.post(this.url + '/deleteNote', value);
  }

  getOneNote (value: any) {
    return this.http.post(this.url + '/getOneNote', value);
  }

}
