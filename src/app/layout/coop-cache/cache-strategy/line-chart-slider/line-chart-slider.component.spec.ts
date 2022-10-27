import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartSliderComponent } from './line-chart-slider.component';

describe('LineChartSliderComponent', () => {
  let component: LineChartSliderComponent;
  let fixture: ComponentFixture<LineChartSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
