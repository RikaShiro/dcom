import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskLineStepComponent } from './disk-line-step.component';

describe('DiskLineStepComponent', () => {
  let component: DiskLineStepComponent;
  let fixture: ComponentFixture<DiskLineStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskLineStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiskLineStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
