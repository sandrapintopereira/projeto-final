import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isActive, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-botao',
  imports: [CommonModule, RouterLink],
  templateUrl: './botao.html',
  styleUrl: './botao.css',
})
export class Botao {
  @Input() texto: string = '';
  @Input() link: string = '';

  constructor(private router: Router) {}

    get isActive(): boolean {
    return this.router.url === this.link;
  }
}