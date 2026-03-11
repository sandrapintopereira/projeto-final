import { Component, OnInit, inject } from '@angular/core';
import { Conteudo } from '../interfaces/conteudo';
import { ConteudoMediaService } from '../conteudo-service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [TitleCasePipe],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  private service = inject(ConteudoMediaService);

  conteudos: Conteudo[] = [];

  ngOnInit(): void {
    this.conteudos = this.service.listar();
  }

  get filmesVistos(): number {
    let contador = 0;

    for (const conteudo of this.conteudos) {
      if (conteudo.tipo === 'filme' && conteudo.estado === 'visto') {
        contador++;
      }
    }

    return contador;
  }

  get seriesVistas(): number {
    let contador = 0;

    for (const conteudo of this.conteudos) {
      if (conteudo.tipo === 'série' && conteudo.estado === 'visto') {
        contador++;
      }
    }

    return contador;
  }

  get melhorFilme(): Conteudo | null {
    const filmes = [];

    for (const conteudo of this.conteudos) {
      if (conteudo.tipo === 'filme') {
        filmes.push(conteudo);
      }
    }
    if (filmes.length === 0) {
      return null;
    }

    let melhor = filmes[0];

    for (const filme of filmes) {
      if (
        filme.avaliacao !== undefined &&
        (!melhor.avaliacao || filme.avaliacao > melhor.avaliacao)
      ) {
        melhor = filme;
      }
    }

    return melhor;
  }

  get melhorSerie(): Conteudo | null {
    const series = [];

    for (const conteudo of this.conteudos) {
      if (conteudo.tipo === 'série') {
        series.push(conteudo);
      }
    }
    if (series.length === 0) {
      return null;
    }
    let melhor = series[0];

    for (const serie of series) {
      if (
        serie.avaliacao !== undefined &&
        (!melhor.avaliacao || serie.avaliacao > melhor.avaliacao)
      ) {
        melhor = serie;
      }
    }

    return melhor;
  }

  get ultimoAdicionado(): Conteudo | null {
    const todos = this.service.listar();

    if (todos.length === 0) {
      return null;
    } else {
      return todos[todos.length - 1];
    }
  }
}
