import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
  
  title: string = 'Error 404';

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle(this.title);
  }
  
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}