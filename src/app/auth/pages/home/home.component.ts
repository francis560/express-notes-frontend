import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Express Notes';

  darkMode_bg2: any;
  darkMode_txt: any;

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.darkMode_bg2 = localStorage.getItem('dark-mode-bg2');
    this.darkMode_txt = localStorage.getItem('dark-mode-txt');

    this.setTitle(this.title);
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
