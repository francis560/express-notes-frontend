import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgProgress ,NgProgressRef } from 'ngx-progressbar';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-student-account',
  templateUrl: './student-account.component.html',
  styleUrls: ['./student-account.component.scss']
})
export class StudentAccountComponent implements OnInit {

  title: string = 'Cuenta de estudiante';
  studentForm!: FormGroup;

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

    this.studentForm = this.FormBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      //check: ['', [Validators.requiredTrue]]
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

  saveStudentAccount (value: any) {
    this.progressRef.start();

    this.auth.studentAccount(value).subscribe((res: any) => {

      localStorage.setItem('token', res.token);
      this.router.navigate(['/']);

      this.progressRef.complete();
    }, err => {
      this.messageError = 'Este email ya está registrado';

      this.progressRef.complete();
    });
  }

}
