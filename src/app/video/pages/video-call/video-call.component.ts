import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeerService } from 'src/app/services/peer.service';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.scss']
})
export class VideoCallComponent implements OnInit {

  roomName: any;
  currentStream: any;
  listUser: Array<any> = [];

  constructor(private route: ActivatedRoute, private webSocketService: WebSocketService, private peerService: PeerService) { 
    this.roomName = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.checkMediaDevices();
    this.initPeer();
    this.initSocket();
  }


  initPeer () {
    const { peer } = this.peerService;

    peer.on('open', (id: any) => {
      const body = {
        idPeer: id,
        roomName: this.roomName
      }

      //this.webSocketService.joinRoom(body);
    });

    peer.on('call', (callEnter: any) => {
      callEnter.answer(this.currentStream);

      callEnter.on('stream', (streamRemote: any) => {
        //this.addVideoUser(streamRemote);
      });
    }, (err: any) => {
      console.log('*** ERROR *** Peer call', err);
    });
  }

  initSocket () {
    this.webSocketService.cbEvent.subscribe( (res: any) => {
      console.log('SOCKET', res);
    });
  }

  checkMediaDevices () {

    if (navigator && navigator.mediaDevices) {

      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      }).then( stream => {
        this.currentStream = stream;
        //this.addVideoUser(stream);
      }).catch( () => {
        console.log('*** ERROR *** Not permissions');
      });

    } else {
      console.log('*** ERROR *** Not media devices');
    }

  }

  addVideoUser (stream: any) {
    this.listUser.push(stream);
  }

}
