import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistkTrainingComponent } from './distk-training.component';

describe('DistkTrainingComponent', () => {
  let component: DistkTrainingComponent;
  let fixture: ComponentFixture<DistkTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistkTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistkTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
