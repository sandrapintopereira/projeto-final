import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMedia } from './lista-media';

describe('ListaMedia', () => {
  let component: ListaMedia;
  let fixture: ComponentFixture<ListaMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMedia],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMedia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
