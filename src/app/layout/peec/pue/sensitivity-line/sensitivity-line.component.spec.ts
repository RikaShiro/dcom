import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensitivityLineComponent } from './sensitivity-line.component';

describe('SensitivityLineComponent', () => {
  let component: SensitivityLineComponent;
  let fixture: ComponentFixture<SensitivityLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensitivityLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SensitivityLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
