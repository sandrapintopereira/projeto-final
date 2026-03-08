import { Component, OnInit } from '@angular/core';
import { ConteudoMediaService } from '../conteudo-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Conteudo } from '../interfaces/conteudo';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { validarAno } from '../validacao/validacao';

@Component({
  selector: 'app-atualizar-conteudo',
  imports: [ReactiveFormsModule],
  templateUrl: './atualizar-conteudo.html',
  styleUrl: './atualizar-conteudo.css',
})
export class AtualizarConteudo implements OnInit {
  conteudo: Conteudo | undefined;

  form = new FormGroup({
      //validação de 3 caracteres
      titulo: new FormControl('', [Validators.required, Validators.minLength(3)]),
      tipo: new FormControl('', [Validators.required]),
      estado: new FormControl('', [Validators.required]),
      //validação de 0 a 10 a avaliação
      avaliacao: new FormControl(0, [Validators.min(0), Validators.max(10)]),
      //validação de 2 caracteres
      genero: new FormControl('', [Validators.required, Validators.minLength(2)]),
      //validação de 3 caracteres
      criador: new FormControl('', [Validators.required, Validators.minLength(3)]),
      //chama função de validarAno
      anoLancamento: new FormControl(2026, [Validators.required, validarAno()]),
      anoFim:  new FormControl<number | null | undefined>(null, [validarAno()]),
    })

  constructor(private route: ActivatedRoute, 
    private service: ConteudoMediaService,
    private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.conteudo = this.service.buscarPeloId(id);

    if(this.conteudo) {
      this.form.patchValue(this.conteudo);
    }
  }
  
  salvar() {
    if(this.conteudo) {
    const id = Number(this.route.snapshot.params['id']);
    this.service.atualizar(this.conteudo);
    this.router.navigate(['detalhe', id]);
    }
  }
}
