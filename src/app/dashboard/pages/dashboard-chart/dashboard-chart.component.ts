import { Component, OnInit, Input } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import { SetChartDataService } from 'src/app/services/set-chart-data.service';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent implements OnInit {

  @Input('dataChartPeriods') dataChartPeriods!: any;

  constructor(private setChartDataService: SetChartDataService) { }

  ngOnInit(): void {
    this.lineChartLabels = this.dataChartPeriods;
    
    this.setChartDataService.setChartDataEvent.subscribe((res: any) => {
      this.lineChartData[0].data = res.nota;
      this.lineChartData[0].label = res.materias.materias;
    });
    
  }

  public lineChartData = [
    { data: [], label: '' },
  ];
  public lineChartLabels: Label[] = [];

  public lineChartColors: Color[] = [
    { 
      backgroundColor: 'rgb(2, 120, 174, .1)',
      borderColor: 'rgb(2, 120, 174)',
      pointBackgroundColor: '#e8654a',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#fff'
    }
  ];
  public lineChartLegend = false;
  public lineChartType: ChartType = 'line';
  // public lineChartPlugins = [pluginAnnotations];

  public lineChartOptions: any = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'transparent',
          },
          ticks: {
            fontColor: 'transparent',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
}
