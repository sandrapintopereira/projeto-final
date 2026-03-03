import { Injectable } from '@angular/core';
import { Conteudo } from './interfaces/conteudo';
/*import { DADOS_INICIAIS } from './mocks/dados';*/

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
  getAll(): Conteudo[] {
      return this.conteudos.slice(); // slice para retornar cópia do array e não o original
   }
    
  //função getById
  
  //função add
  //função update
  //função delete(id)
}
