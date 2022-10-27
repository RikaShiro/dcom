import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartNoSliderComponent } from './line-chart-no-slider.component';

describe('LineChartNoSliderComponent', () => {
  let component: LineChartNoSliderComponent;
  let fixture: ComponentFixture<LineChartNoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineChartNoSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LineChartNoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
