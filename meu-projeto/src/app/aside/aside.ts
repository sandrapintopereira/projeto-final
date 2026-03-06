import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router'; 
import { Botao } from '../botao/botao';

@Component({
  selector: 'app-aside',
  imports: [RouterLink, Botao, RouterLinkActive],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  constructor(private router: Router) {}

  get paginaAtual(): string {
    return this.router.url
  }
}
