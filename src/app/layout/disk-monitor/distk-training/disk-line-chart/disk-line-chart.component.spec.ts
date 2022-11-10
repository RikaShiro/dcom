import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskLineChartComponent } from './disk-line-chart.component';

describe('DiskLineChartComponent', () => {
  let component: DiskLineChartComponent;
  let fixture: ComponentFixture<DiskLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskLineChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiskLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
