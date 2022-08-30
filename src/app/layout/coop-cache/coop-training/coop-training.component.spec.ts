import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopTrainingComponent } from './coop-training.component';

describe('CoopTrainingComponent', () => {
  let component: CoopTrainingComponent;
  let fixture: ComponentFixture<CoopTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoopTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoopTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
