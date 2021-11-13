import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-v4',
  templateUrl: './nav-v4.component.html',
  styleUrls: ['./nav-v4.component.scss']
})
export class NavV4Component implements OnInit {

  @Input('darkMode_bg') darkMode_bg!: string;
  bgDark!: string;
  
  constructor() { }
  
  ngOnInit(): void {
    this.bgDark = `${this.darkMode_bg}`;
  }

}
