import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesMedia } from './detalhes-media';

describe('DetalhesMedia', () => {
  let component: DetalhesMedia;
  let fixture: ComponentFixture<DetalhesMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesMedia],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesMedia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
