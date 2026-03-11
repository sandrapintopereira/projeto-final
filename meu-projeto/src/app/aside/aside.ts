import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Botao } from '../botao/botao';

@Component({
  selector: 'app-aside',
  imports: [Botao],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  private router = inject(Router);

  get paginaAtual(): string {
    return this.router.url;
  }
}
