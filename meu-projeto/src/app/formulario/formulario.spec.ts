import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioMedia } from './formulario';

describe('FormularioMedia', () => {
  let component: FormularioMedia;
  let fixture: ComponentFixture<FormularioMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioMedia],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioMedia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
