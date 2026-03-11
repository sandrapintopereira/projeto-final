import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-botao',
  imports: [CommonModule, RouterLink],
  templateUrl: './botao.html',
  styleUrl: './botao.css',
})
export class Botao {
  private router = inject(Router);

  @Input() texto = '';
  @Input() link = '';
}
