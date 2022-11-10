import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBarComponent } from './one-bar.component';

describe('OneBarComponent', () => {
  let component: OneBarComponent;
  let fixture: ComponentFixture<OneBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
