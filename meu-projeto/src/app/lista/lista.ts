import { Component, OnInit, inject } from '@angular/core';
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
  private service = inject(ConteudoMediaService);

  //variável para pesquisa
  textoPesquisa = '';
  //variável para ordenação
  criterioOrdenacao = 'titulo-az';
  conteudos: Conteudo[] = [];
  estadoFiltro = '';

  ngOnInit(): void {
    this.conteudos = this.service.listar();
  }

  get conteudosFiltrados(): Conteudo[] {
    const todos = this.service
      .listar()
      .filter(
        (c) =>
          !this.textoPesquisa || c.titulo.toLowerCase().includes(this.textoPesquisa.toLowerCase()),
      );

    if (this.criterioOrdenacao === 'visto' || this.criterioOrdenacao === 'porVer') {
      return todos.filter((c) => c.estado === this.criterioOrdenacao);
    }

    return todos;
  }

  get conteudosOrdenados(): Conteudo[] {
    //cópia de array
    const lista = [...this.conteudosFiltrados];
    //para ordenar alfabeticamente
    if (this.criterioOrdenacao === 'titulo-az') {
      lista.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (this.criterioOrdenacao === 'titulo-za') {
      lista.sort((a, b) => b.titulo.localeCompare(a.titulo));
    }
    return lista;
  }

  remover(event: Event, id: number) {
    this.service.remover(id);
    event.stopPropagation();
  }
}
