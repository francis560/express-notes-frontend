import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-v2',
  templateUrl: './nav-v2.component.html',
  styleUrls: ['./nav-v2.component.scss']
})
export class NavV2Component implements OnInit {

  darkMode_bg: any;

  constructor() { }

  ngOnInit(): void {
    this.darkMode_bg = localStorage.getItem('dark-mode-bg');
  }

}
