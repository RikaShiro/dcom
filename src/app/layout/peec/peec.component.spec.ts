import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeecComponent } from './peec.component';

describe('PeecComponent', () => {
  let component: PeecComponent;
  let fixture: ComponentFixture<PeecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
