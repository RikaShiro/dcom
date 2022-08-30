import { TestBed } from '@angular/core/testing';

import { DistkTrainingService } from './distk-training.service';

describe('DistkTrainingService', () => {
  let service: DistkTrainingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistkTrainingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
