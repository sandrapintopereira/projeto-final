import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botao',
  imports: [CommonModule, RouterLink],
  templateUrl: './botao.html',
  styleUrl: './botao.css',
})
export class Botao {
  @Input() texto: string = '';
  @Input() link: string = '';
  @Input() routerLink?: string;
}
