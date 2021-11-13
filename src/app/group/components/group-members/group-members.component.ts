import { Component, OnInit, Input } from '@angular/core';
import { NgProgress ,NgProgressRef } from 'ngx-progressbar';
import { DataUserService } from '../../../services/data-user.service';

@Component({
  selector: 'app-group-members',
  templateUrl: './group-members.component.html',
  styleUrls: ['./group-members.component.scss']
})
export class GroupMembersComponent implements OnInit {

  @Input('groupId') groupId: any;

  currentIconProfileTeacher: string = 'https://avatar-api.herokuapp.com/027-man-7.png';
  currentIconProfileStudent: string = 'https://avatar-api.herokuapp.com/016-boy-2.png';

  progressRef!: NgProgressRef;

  constructor(private progress: NgProgress, private dataUser: DataUserService) { }

  users!: any[];

  ngOnInit(): void {
    this.progressRef = this.progress.ref('barra');
    this.progressRef.start();
    
    this.dataUser.getGroupMembers({groupId: this.groupId}).subscribe((res: any) => {
      this.users = res;
      this.progressRef.complete();
    }, err => {
      this.progressRef.complete();
    });
  }

}