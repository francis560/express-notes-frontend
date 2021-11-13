import { TestBed } from '@angular/core/testing';

import { SetChartDataService } from './set-chart-data.service';

describe('SetChartDataService', () => {
  let service: SetChartDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetChartDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
