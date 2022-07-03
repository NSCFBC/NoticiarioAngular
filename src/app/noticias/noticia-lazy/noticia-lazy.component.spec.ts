import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaLazyComponent } from './noticia-lazy.component';

describe('NoticiaLazyComponent', () => {
  let component: NoticiaLazyComponent;
  let fixture: ComponentFixture<NoticiaLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
