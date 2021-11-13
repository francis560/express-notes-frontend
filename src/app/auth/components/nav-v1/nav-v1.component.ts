import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-v1',
  templateUrl: './nav-v1.component.html',
  styleUrls: ['./nav-v1.component.scss']
})
export class NavV1Component implements OnInit {

  darkMode_bg: any;

  constructor() { }

  ngOnInit(): void {
    this.darkMode_bg = localStorage.getItem('dark-mode-bg');
  }

}
