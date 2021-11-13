import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  darkMode_bg: any;
  darkMode_txt: any;

  constructor() { }

  ngOnInit(): void {
    this.darkMode_bg = localStorage.getItem('dark-mode-bg');
    this.darkMode_txt = localStorage.getItem('dark-mode-txt');
  }
  
}
