import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoopCacheComponent } from './coop-cache.component';

describe('CoopCacheComponent', () => {
  let component: CoopCacheComponent;
  let fixture: ComponentFixture<CoopCacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoopCacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoopCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
