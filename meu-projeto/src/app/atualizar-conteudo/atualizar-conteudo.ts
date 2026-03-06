import { Component, OnInit } from '@angular/core';
import { ConteudoMediaService } from '../conteudo-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Conteudo } from '../interfaces/conteudo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atualizar-conteudo',
  imports: [FormsModule],
  templateUrl: './atualizar-conteudo.html',
  styleUrl: './atualizar-conteudo.css',
})
export class AtualizarConteudo implements OnInit {
  conteudo: Conteudo | undefined;

  constructor(private route: ActivatedRoute, 
    private service: ConteudoMediaService,
    private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.conteudo = this.service.buscarPeloId(id);
  }
  
  salvar() {
    if(this.conteudo) {
    const id = Number(this.route.snapshot.params['id']);
    this.service.atualizar(this.conteudo);
    this.router.navigate(['detalhe', id]);
    }
  }
}
