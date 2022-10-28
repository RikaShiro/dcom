import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineSliderComponent } from './line-slider.component';

describe('LineSliderComponent', () => {
  let component: LineSliderComponent;
  let fixture: ComponentFixture<LineSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LineSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LineSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
