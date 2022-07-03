import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaGeralComponent } from './estrutura-geral.component';

describe('EstruturaGeralComponent', () => {
  let component: EstruturaGeralComponent;
  let fixture: ComponentFixture<EstruturaGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
