import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [UpperCasePipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo: string = "Frame Marcado";
  logotipo: string = 'logo.png';
}
