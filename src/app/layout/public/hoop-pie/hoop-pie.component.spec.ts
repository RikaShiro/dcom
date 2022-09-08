import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoopPieComponent } from './hoop-pie.component';

describe('HoopPieComponent', () => {
  let component: HoopPieComponent;
  let fixture: ComponentFixture<HoopPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoopPieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoopPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
