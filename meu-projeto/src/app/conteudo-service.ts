import { Injectable } from '@angular/core';
import { Conteudo } from './interfaces/conteudo';
import { FormConteudo } from './interfaces/formConteudo';

const CHAVE_FIXA = "conteudos";

@Injectable({
  providedIn: 'root',
})


export class ConteudoMediaService {
  private conteudos: Conteudo[] = [];

  constructor() {
    this.conteudos = this.carregarStorage() || []; //para carregar array no início
  }
  salvarStorage(conteudos: Conteudo[]) {
     return localStorage.setItem(CHAVE_FIXA, JSON.stringify(conteudos));
     
  }

  carregarStorage() {
     const dadosCarregados = localStorage.getItem(CHAVE_FIXA);
  
     if(dadosCarregados) {
        return JSON.parse(dadosCarregados);
     } else {
        return [];
     }
  }

  //função getAll
  listar(): Conteudo[] {
      return this.conteudos;
   }
    
  //função getById
  buscarPeloId(id: Date): Conteudo | undefined {
      return this.conteudos.find(conteudo => conteudo.id === id);
  }

  //função add
  adicionar(dados: FormConteudo): Conteudo {
     const novoConteudo: Conteudo = {
      id: new Date(),//sdfghj
      titulo: dados.titulo,
      tipo: dados.tipo,
      estado: dados.estado,
      avaliacao: dados.avaliacao,
      genero: dados.genero,
      criador: dados.criador,
      anoLancamento: dados.anoLancamento,
      criadoEm: new Date(),
     };
  
     this.conteudos.push(novoConteudo);
     this.salvarStorage(this.conteudos);
     return novoConteudo;
  
     
  }

  //função update
  atualizar(conteudoAtualizado: Conteudo): void {
    const conteudosAtualizados: Conteudo[] = [];

    for(const conteudoAtual of this.conteudos) {
      if(conteudoAtual.id.getTime() === conteudoAtualizado.id.getTime()) {
        //se o id bater certo, substitui pelo conteúdo atualizado
        conteudosAtualizados.push(conteudoAtualizado);
      } else {
        //se não for o que quero alterar, mantem o original
        conteudosAtualizados.push(conteudoAtual);
      }
    }

    this.conteudos = conteudosAtualizados;

    this.salvarStorage(this.conteudos);
  }

  //função delete(id)
  remover(id: Date): void {
     this.conteudos = this.conteudos.filter(c => c.id.getTime() !== id.getTime()); //getTime para retornar number
  
     this.salvarStorage(this.conteudos);
     
  
  }
}
