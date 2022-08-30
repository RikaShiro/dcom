import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaultForecastComponent } from './fault-forecast.component';

describe('FaultForecastComponent', () => {
  let component: FaultForecastComponent;
  let fixture: ComponentFixture<FaultForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaultForecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaultForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
