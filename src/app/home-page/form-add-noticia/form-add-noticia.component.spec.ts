import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddNoticiaComponent } from './form-add-noticia.component';

describe('FormAddNoticiaComponent', () => {
  let component: FormAddNoticiaComponent;
  let fixture: ComponentFixture<FormAddNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
