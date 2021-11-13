import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.component.html',
  styleUrls: ['./enter-code.component.scss']
})
export class EnterCodeComponent implements OnInit {

  @Input('confirmCodeFinal') confirmCode!: string;
  @Input('username') username!: string;
  @Input('_id') _id!: string;

  codeForm!: FormGroup;
  recoverPasswordBoolean: boolean = false;
  recoverPassword!: FormGroup;

  eyeIcon: string = 'far fa-eye-slash';
  boolean: boolean = true;

  code1: any;
  code2: any;
  code3: any;
  code4: any;
  code5: any;
  code6: any;
  code7: any;
  code8: any;

  constructor(private FormBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void { 
    this.codeForm = this.FormBuilder.group({
      code1: ['', [Validators.required]],
      code2: ['', [Validators.required]],
      code3: ['', [Validators.required]],
      code4: ['', [Validators.required]],
      code5: ['', [Validators.required]],
      code6: ['', [Validators.required]],
      code7: ['', [Validators.required]],
      code8: ['', [Validators.required]]
    });

    this.recoverPassword = this.FormBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  show (value: any) {

    var code = this.code1 + this.code2 + this.code3 + this.code4 + this.code5 + this.code6 + this.code7 + this.code8;

    if (this.confirmCode == code) {
      this.recoverPasswordBoolean = true;
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

  updatePassword (value: any) {
    const val = {_id: this._id, email: ' ', username: this.username, password: value.password};

    this.auth.updateAccount(val).subscribe(res => {
      this.router.navigate(['/signin']);
    });
  }

}
