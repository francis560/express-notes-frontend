import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { NgProgress ,NgProgressRef } from 'ngx-progressbar';
import { DataUserService } from '../../../services/data-user.service'
import { NoteDataService } from '../../../services/note-data.service';
import { SetChartDataService } from '../../../services/set-chart-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string = 'Dashboard';
  // permisos!: boolean;
  // _id: any;
  // groupId: any;
  // code: any;

  // subjects: Array<any> = [];
  // note: any;
  // dataChartPeriods: any = [];
  // dataNoteButton: Array<any> = [];


  progressRef!: NgProgressRef;

  constructor(private progress: NgProgress, private setChartDataService: SetChartDataService, private noteDataService: NoteDataService, private dataUserService: DataUserService, private router: Router, private route: ActivatedRoute, private titleService: Title) { }

  ngOnInit(): void {
    this.setTitle(this.title);
    this.progressRef = this.progress.ref('barra');

    // this.code = this.route.snapshot.paramMap.get('id');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
