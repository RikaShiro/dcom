import { TestBed } from '@angular/core/testing';

import { CoopTrainingService } from './coop-training.service';

describe('CoopTrainingService', () => {
  let service: CoopTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoopTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
