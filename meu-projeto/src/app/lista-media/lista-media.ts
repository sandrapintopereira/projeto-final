import { Component, OnInit } from '@angular/core';
import { ConteudoMediaService } from '../conteudo-service';
import { Conteudo } from '../interfaces/conteudo';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-media',
  imports: [RouterLink, FormsModule],
  templateUrl: './lista-media.html',
  styleUrl: './lista-media.css',
})

//OnInit para carregar dados/incializar estado
export class ListaMedia implements OnInit {
  textoPesquisa: string = '';
  conteudos: Conteudo[] = [];

  constructor(private service: ConteudoMediaService) {}

  ngOnInit(): void {
    this.conteudos = this.service.listar();
  }
}
