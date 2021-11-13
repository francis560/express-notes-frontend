import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../../services/auth.service';
import { v4 as uuidV4 } from 'uuid';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {

  recoverPassword!: FormGroup;

  title: string = 'Recupera tu cuenta'

  darkMode_bg2: any;
  darkMode_txt: any;

  showComponent: any = 'none';
  messageError: string  = '';
  confirmCodeFinal!: string;
  username!: string;
  _id!: string;

  constructor(private FormBuilder: FormBuilder, private auth: AuthService, private titleService: Title) { }

  ngOnInit(): void {
    this.darkMode_bg2 = localStorage.getItem('dark-mode-bg2');
    this.darkMode_txt = localStorage.getItem('dark-mode-txt');

    this.setTitle(this.title);

    this.recoverPassword = this.FormBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }


  recover(value: any) {
    var confirmCode = uuidV4();
    var confirmCode2 = confirmCode.split('-');
    this.confirmCodeFinal = confirmCode2[0];

    var val = { correo: value.email, code: this.confirmCodeFinal };

    this.auth.recoverPassword(val).subscribe((res: any) => {
      this.showComponent = 'block';
      this.messageError = '';
      this.username = res.email;
      this._id = res._id;
    }, err => {
      this.messageError = 'Este correo electrónico no esta registrado';
    });
  }
}
