import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaGenericComponent } from './noticia-generic.component';

describe('NoticiaGenericComponent', () => {
  let component: NoticiaGenericComponent;
  let fixture: ComponentFixture<NoticiaGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaGenericComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
