import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarConteudo } from './atualizar-conteudo';

describe('AtualizarConteudo', () => {
  let component: AtualizarConteudo;
  let fixture: ComponentFixture<AtualizarConteudo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarConteudo],
    }).compileComponents();

    fixture = TestBed.createComponent(AtualizarConteudo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
