import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogoriaNoticiaComponent } from './catogoria-noticia.component';

describe('CatogoriaNoticiaComponent', () => {
  let component: CatogoriaNoticiaComponent;
  let fixture: ComponentFixture<CatogoriaNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatogoriaNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatogoriaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
