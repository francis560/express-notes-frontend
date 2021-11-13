import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DataUserService } from '../../../services/data-user.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  title: string = 'Editar cuenta';
  editAccountName!: FormGroup;
  editAccountEmail!: FormGroup;
  editAccountPassword!: FormGroup;

  username!: string;
  email!: string;
  password!: string;
  _id: any;

  eyeIcon: string = 'far fa-eye-slash';
  darkModeBoolean!: boolean;
  mode!: string;
  modeIcon!: string;
  moon: string = 'fas fa-moon';
  sun: string = 'fas fa-sun';
  boolean: boolean = true;

  darkMode_bg: any;
  darkMode_bg2: any;
  darkMode_txt: any;


  constructor(private FormBuilder: FormBuilder, private titleService: Title, private DataUser: DataUserService, private auth: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    this.darkMode_bg = localStorage.getItem('dark-mode-bg');
    this.darkMode_bg2 = localStorage.getItem('dark-mode-bg2');
    this.darkMode_txt = localStorage.getItem('dark-mode-txt');

    if (this.darkMode_bg == 'dark-mode-bg') {
      this.darkModeBoolean = true
      this.mode = 'claro';
      this.modeIcon = this.moon;
    } else {
      this.darkModeBoolean = false;
      this.mode = 'oscuro';
      this.modeIcon = this.sun;
    }

    this.editAccountName = this.FormBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]]
    });

    this.editAccountEmail = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.editAccountPassword = this.FormBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });

    this.setTitle(this.title);

    this.DataUser.getDataProfile().subscribe((res: any) => {
      this.username = res.username;
      this._id = res._id;
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  darkMode () {
    if (this.darkModeBoolean) {
      this.darkModeBoolean = false;
      localStorage.removeItem('dark-mode-bg');
      localStorage.removeItem('dark-mode-bg2');
      localStorage.removeItem('dark-mode-txt');
      window.location.reload();
      this.mode = 'claro';
    } else {
      this.darkModeBoolean = true
      localStorage.setItem('dark-mode-bg', 'dark-mode-bg');
      localStorage.setItem('dark-mode-bg2', 'dark-mode-bg2');
      localStorage.setItem('dark-mode-txt', 'dark-mode-txt');
      window.location.reload();
      this.mode = 'oscuro';
    }
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

  updateProfile (value: any) {
    
    if (this.email == undefined) {
      this.email = '';
    }

    if (this.password == undefined) {
      this.password = '';
    }

    if (value.num == 1) {
      this.email = '';
    }

    if (value.num2 == 1) {
      this.password = '';
    }
    
    var finalResult = {_id: this._id, username: this.username, email: this.email, password: this.password};

    this.auth.updateAccount(finalResult).subscribe((res: any) => {

      localStorage.removeItem('token');
      localStorage.setItem('token', res.token);

      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      Toast.fire({
        icon: 'success',
        title: 'Cuenta actualizada con exito'
      });
      
    }, err => {

      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      });

      Toast.fire({
        icon: 'error',
        title: 'Error al actualizar la cuenta'
      });

      console.error(err);
    });
  }
}