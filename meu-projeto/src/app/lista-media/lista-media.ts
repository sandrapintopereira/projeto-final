import { Component, OnInit } from '@angular/core';
import { ConteudoMediaService } from '../conteudo-service';
import { Conteudo } from '../interfaces/conteudo';

@Component({
  selector: 'app-lista-media',
  imports: [],
  templateUrl: './lista-media.html',
  styleUrl: './lista-media.css',
})

//OnInit para carregar dados/incializar estado
export class ListaMedia implements OnInit {
  conteudos: Conteudo[] = [];

  constructor(private service: ConteudoMediaService) {}

  ngOnInit(): void {
    this.conteudos = this.service.listar();
  }
}
