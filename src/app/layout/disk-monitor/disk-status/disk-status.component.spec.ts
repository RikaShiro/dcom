import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiskStatusComponent } from './disk-status.component';

describe('DiskStatusComponent', () => {
  let component: DiskStatusComponent;
  let fixture: ComponentFixture<DiskStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiskStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiskStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
