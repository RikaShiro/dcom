import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeLineChartComponent } from './pe-line-chart.component';

describe('PeLineChartComponent', () => {
  let component: PeLineChartComponent;
  let fixture: ComponentFixture<PeLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeLineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
