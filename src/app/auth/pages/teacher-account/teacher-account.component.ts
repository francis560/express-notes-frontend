import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgProgress ,NgProgressRef } from 'ngx-progressbar';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-account',
  templateUrl: './teacher-account.component.html',
  styleUrls: ['./teacher-account.component.scss']
})
export class TeacherAccountComponent implements OnInit {

  title: string = 'Cuenta de maestro';
  teacherForm!: FormGroup;

  messageError: string = '';

  eyeIcon: string = 'far fa-eye-slash';
  boolean: boolean = true;

  darkMode_bg2: any;
  darkMode_txt: any;

  progressRef!: NgProgressRef;

  constructor(private progress: NgProgress, private FormBuilder: FormBuilder, private titleService: Title, private auth: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    this.darkMode_bg2 = localStorage.getItem('dark-mode-bg2');
    this.darkMode_txt = localStorage.getItem('dark-mode-txt');

    this.progressRef = this.progress.ref('barra');

    this.setTitle(this.title);

    this.teacherForm = this.FormBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      //check: ['']
    });
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  viewPassword () {
    const password = document.getElementById('password');

    if (this.boolean) {
      password?.setAttribute('type', 'text');
      this.boolean = false;
      this.eyeIcon = 'far fa-eye';
    } else {
      password?.setAttribute('type', 'password');
      this.boolean = true;
      this.eyeIcon = 'far fa-eye-slash';
    }
  }

  saveTeacherAccount (value: any) {
    this.progressRef.start();

    this.auth.teacherAccount(value).subscribe((res: any) => {

      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);

      this.progressRef.complete();
    }, err => {
      this.messageError = 'Este email ya está registrado';

      this.progressRef.complete();
    });
  }
}