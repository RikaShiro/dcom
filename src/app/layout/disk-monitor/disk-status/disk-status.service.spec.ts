import { TestBed } from '@angular/core/testing';

import { DiskStatusService } from './disk-status.service';

describe('DiskStatusService', () => {
  let service: DiskStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiskStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
