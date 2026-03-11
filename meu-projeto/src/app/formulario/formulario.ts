import { Component, inject } from '@angular/core';
import { ConteudoMediaService } from '../conteudo-service';
import { FormConteudo } from '../interfaces/formConteudo';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validarAno } from '../validacao/validacao';

@Component({
  selector: 'app-formulario-media',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class FormularioMedia {
  private service = inject(ConteudoMediaService);
  private router = inject(Router);

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
    anoFim: new FormControl(null, [validarAno()]),
    temporadas: new FormControl(null, [Validators.min(1)]),
  });

  onSubmit() {
    const value = this.form.value;
    if (this.form.valid) {
      this.service.adicionar(value as FormConteudo);
      //para voltar para a lista de conteúdos após adicionar um novo conteúdo
      this.router.navigate(['lista']);
    }
  }
}
