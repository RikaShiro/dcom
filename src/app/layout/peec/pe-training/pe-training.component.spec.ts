import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeTrainingComponent } from './pe-training.component';

describe('PeTrainingComponent', () => {
  let component: PeTrainingComponent;
  let fixture: ComponentFixture<PeTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
