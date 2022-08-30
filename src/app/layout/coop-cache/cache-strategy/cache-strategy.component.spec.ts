import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CacheStrategyComponent } from './cache-strategy.component';

describe('CacheStrategyComponent', () => {
  let component: CacheStrategyComponent;
  let fixture: ComponentFixture<CacheStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CacheStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CacheStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
