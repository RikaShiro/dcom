import { TestBed } from '@angular/core/testing';

import { FaultForecastService } from './fault-forecast.service';

describe('FaultForecastService', () => {
  let service: FaultForecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaultForecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
