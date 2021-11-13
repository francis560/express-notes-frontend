import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SetChartDataService {

  setChartDataEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

}
