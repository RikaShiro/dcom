import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLinesComponent } from './double-lines.component';

describe('doubleLinesComponent', () => {
  let component: DoubleLinesComponent;
  let fixture: ComponentFixture<DoubleLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoubleLinesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoubleLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
