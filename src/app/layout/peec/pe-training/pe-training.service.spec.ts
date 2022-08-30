import { TestBed } from '@angular/core/testing';

import { PeTrainingService } from './pe-training.service';

describe('PeTrainingService', () => {
  let service: PeTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
