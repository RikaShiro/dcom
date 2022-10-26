import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleYaxisChartComponent } from './double-yaxis-chart.component';

describe('DoubleYaxisChartComponent', () => {
  let component: DoubleYaxisChartComponent;
  let fixture: ComponentFixture<DoubleYaxisChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleYaxisChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoubleYaxisChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
