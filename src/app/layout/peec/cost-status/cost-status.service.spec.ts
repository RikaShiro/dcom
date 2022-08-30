import { TestBed } from '@angular/core/testing';

import { CostStatusService } from './cost-status.service';

describe('CostStatusService', () => {
  let service: CostStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
