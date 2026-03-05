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
    if(typeof window !== 'undefined') {
      this.conteudos = this.carregarStorage() || [];
    } else {
      this.conteudos = [];
    }
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
  /*buscarPeloId(id: number): Conteudo | undefined {
      return this.conteudos.find(conteudo => conteudo.id === id);
  }*/

  //função add
  adicionar(dados: FormConteudo): Conteudo {
     const novoConteudo: Conteudo = {
      id: Date.now(),
      titulo: dados.titulo,
      tipo: dados.tipo,
      estado: dados.estado,
      avaliacao: dados.avaliacao || 0,
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
      if(conteudoAtual.id === conteudoAtualizado.id) {
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
  remover(id: number): void {
     this.conteudos = this.conteudos.filter(c => c.id!== id); 
  
     this.salvarStorage(this.conteudos);
     
  
  }
}
