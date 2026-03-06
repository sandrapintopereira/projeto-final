import { Component, OnInit } from '@angular/core';
import { ConteudoMediaService } from '../conteudo-service';
import { CommonModule, NgClass } from '@angular/common';
import { Conteudo } from '../interfaces/conteudo';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista-media',
  imports: [RouterLink, FormsModule, NgClass, CommonModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})

//OnInit para carregar dados/incializar estado
export class ListaMedia implements OnInit {
  //variável para pesquisa
  textoPesquisa: string = '';
  //variável para ordenação
  criterioOrdenacao = 'titulo-az';
  conteudos: Conteudo[] = [];

  constructor(private service: ConteudoMediaService) {}

  ngOnInit(): void {
    this.conteudos = this.service.listar();
  }

  get conteudosFiltrados(): Conteudo[] { 
    const todos = this.service.listar();
    if (!this.textoPesquisa) {
      return todos;
    } else {
    return todos.filter(c => c.titulo.toLowerCase().includes(this.textoPesquisa.toLowerCase()));
    }
  }

  get conteudosOrdenados(): Conteudo[] {
    //cópia de array
    const lista = [...this.conteudosFiltrados];
    //para ordenar alfabeticamente 
    if(this.criterioOrdenacao === 'titulo-az') {
      lista.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (this.criterioOrdenacao === 'titulo-za') {
      lista.sort((a, b) => b.titulo.localeCompare(a.titulo));
    }
    return lista;
  }

  remover(id: number) {
    console.log("ID clicado:", id);
    this.service.remover(id);
    this.conteudos = this.service.listar();
  }
}
