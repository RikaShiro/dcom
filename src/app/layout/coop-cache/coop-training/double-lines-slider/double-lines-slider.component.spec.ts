import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLinesSliderComponent } from './double-lines-slider.component';

describe('DoubleLinesSliderComponent', () => {
  let component: DoubleLinesSliderComponent;
  let fixture: ComponentFixture<DoubleLinesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoubleLinesSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoubleLinesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
