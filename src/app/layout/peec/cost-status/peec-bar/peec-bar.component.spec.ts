import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeecBarComponent } from './peec-bar.component';

describe('PeecBarComponent', () => {
  let component: PeecBarComponent;
  let fixture: ComponentFixture<PeecBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeecBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeecBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
