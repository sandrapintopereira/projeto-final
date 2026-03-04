import { Component, OnInit } from '@angular/core';
import { ConteudoMediaService } from '../conteudo-service';
import { CommonModule, NgClass } from '@angular/common';
import { Conteudo } from '../interfaces/conteudo';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista-media',
  imports: [RouterLink, FormsModule, NgClass],
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

  get conteudosFiltrados(): Conteudo[] { 
    const todos = this.service.listar();
    if (!this.textoPesquisa) {
      return todos;
    } 
    return todos.filter(c => c.titulo.toLowerCase().includes(this.textoPesquisa.toLowerCase()));
  }
}


