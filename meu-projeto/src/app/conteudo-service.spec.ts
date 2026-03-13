import { TestBed } from '@angular/core/testing';

import { ConteudoMediaService } from './conteudo-service';

describe('ConteudoMediaService', () => {
  let service: ConteudoMediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConteudoMediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
