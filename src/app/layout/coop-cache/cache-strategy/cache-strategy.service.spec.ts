import { TestBed } from '@angular/core/testing';

import { CacheStrategyService } from './cache-strategy.service';

describe('CacheStrategyService', () => {
  let service: CacheStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
