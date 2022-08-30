import { TestBed } from '@angular/core/testing';

import { PueService } from './pue.service';

describe('PueService', () => {
  let service: PueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
