import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolLineComponent } from './symbol-line.component';

describe('SymbolLineComponent', () => {
  let component: SymbolLineComponent;
  let fixture: ComponentFixture<SymbolLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymbolLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymbolLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
