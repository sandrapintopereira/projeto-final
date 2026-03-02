import { TestBed } from '@angular/core/testing';

import { ConteudoMedia } from './conteudo-media';

describe('ConteudoMedia', () => {
  let service: ConteudoMedia;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConteudoMedia);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
