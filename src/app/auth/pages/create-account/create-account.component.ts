import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  title: string = 'Crear cuenta';

  darkMode_bg2: any;

  constructor(private router: Router, private titleService: Title) { }

  ngOnInit(): void {
    this.darkMode_bg2 = localStorage.getItem('dark-mode-bg2');

    this.setTitle(this.title);
  }


  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  teacherAccount () {
    this.router.navigate(['/teacherAccount']);
  }

  studentAccount () {
    this.router.navigate(['/studentAccount']);
  }

}
