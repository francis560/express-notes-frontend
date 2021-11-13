import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  @Input('stream') stream: any;
  @Input('listStream') listStream: any;

  constructor() { }

  ngOnInit(): void {
  }

}
