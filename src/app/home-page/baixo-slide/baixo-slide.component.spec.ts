import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaixoSlideComponent } from './baixo-slide.component';

describe('BaixoSlideComponent', () => {
  let component: BaixoSlideComponent;
  let fixture: ComponentFixture<BaixoSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaixoSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaixoSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
