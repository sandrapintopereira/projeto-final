import { Component } from '@angular/core';
import { Conteudo } from '../interfaces/conteudo';
import { ConteudoMediaService } from '../conteudo-service';


@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  conteudos: Conteudo[] = [];
  
    constructor(private service: ConteudoMediaService) {}
  
    ngOnInit(): void {
      this.conteudos = this.service.listar();
    }

    get filmesVistos(): number {
      let contador = 0;

      for(let conteudo of this.conteudos) {
        if(conteudo.tipo === 'filme' && conteudo.estado === 'visto') {
          contador++;
        }
      }

      return contador;
      }

    get seriesVistas(): number {
      let contador = 0;

      for(let conteudo of this.conteudos) {
        if(conteudo.tipo === 'serie' && conteudo.estado === 'visto') {
          contador++;

        }
      }

      return contador;
      }
    
    get melhorFilme(): Conteudo | null {
      const filmes = [];

      for(let conteudo of this.conteudos) {
        if(conteudo.tipo === 'filme') {
          filmes.push(conteudo);
        }
        }
        if(filmes.length === 0) {
          return null
      }

      let melhor = filmes[0];

      for(let filme of filmes) {
        if(filme.avaliacao !== undefined && (!melhor.avaliacao || filme.avaliacao > melhor.avaliacao)) {
          melhor = filme;
        }
      }

      return melhor;
    }

    get melhorSerie(): Conteudo | null {
      const series = [];

      for(let conteudo of this.conteudos) {
        if(conteudo.tipo === 'serie') {
          series.push(conteudo);
        }
      }
      if(series.length === 0) {
          return null;
      }
      let melhor = series[0];

      for(let serie of series) {
        if(serie.avaliacao !== undefined && (!melhor.avaliacao || serie.avaliacao > melhor.avaliacao)) {
          melhor = serie;
        }
      }

      return melhor;
  
    }

    get ultimoAdicionado(): Conteudo | null {
      const todos = this.service.listar();

      if(todos.length === 0) {
        return null;
      } else {
        return todos[todos.length - 1];
      }
    }

}

