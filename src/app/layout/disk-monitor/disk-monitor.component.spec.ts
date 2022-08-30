import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskMonitorComponent } from './disk-monitor.component';

describe('DiskMonitorComponent', () => {
  let component: DiskMonitorComponent;
  let fixture: ComponentFixture<DiskMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskMonitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiskMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
