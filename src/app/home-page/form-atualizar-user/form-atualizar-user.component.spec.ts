import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAtualizarUserComponent } from './form-atualizar-user.component';

describe('FormAtualizarUserComponent', () => {
  let component: FormAtualizarUserComponent;
  let fixture: ComponentFixture<FormAtualizarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAtualizarUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAtualizarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
