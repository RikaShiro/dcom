import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleYAxesComponent } from './double-y-axes.component';

describe('DoubleYAxesComponent', () => {
  let component: DoubleYAxesComponent;
  let fixture: ComponentFixture<DoubleYAxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoubleYAxesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoubleYAxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
