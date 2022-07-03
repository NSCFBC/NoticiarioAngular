import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRemoverUserComponent } from './form-remover-user.component';

describe('FormRemoverUserComponent', () => {
  let component: FormRemoverUserComponent;
  let fixture: ComponentFixture<FormRemoverUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRemoverUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRemoverUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
