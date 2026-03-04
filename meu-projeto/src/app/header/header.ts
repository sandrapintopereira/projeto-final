import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo: string = "Catálogo de Filmes/Séries";
  logotipo: string = 'logo.png';
}
