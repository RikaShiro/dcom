import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartVComponent } from './line-chart-v.component';

describe('LineChartVComponent', () => {
  let component: LineChartVComponent;
  let fixture: ComponentFixture<LineChartVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
