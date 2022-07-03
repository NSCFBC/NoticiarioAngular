import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstruturaGridComponent } from './estrutura-grid.component';

describe('EstruturaGridComponent', () => {
  let component: EstruturaGridComponent;
  let fixture: ComponentFixture<EstruturaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstruturaGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstruturaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
