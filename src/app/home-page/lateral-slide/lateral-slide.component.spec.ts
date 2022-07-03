import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralSlideComponent } from './lateral-slide.component';

describe('LateralSlideComponent', () => {
  let component: LateralSlideComponent;
  let fixture: ComponentFixture<LateralSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
