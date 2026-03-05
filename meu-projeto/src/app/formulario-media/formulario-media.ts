import { Component } from '@angular/core';
import { ConteudoMediaService } from '../conteudo-service';
import { FormConteudo } from '../interfaces/formConteudo';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-media',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-media.html',
  styleUrl: './formulario-media.css',
})
export class FormularioMedia {
  constructor(private service: ConteudoMediaService,
    private router: Router,
  ) {}

  form = new FormGroup({
    titulo: new FormControl('', [Validators.required, Validators.minLength(3)]),
    tipo: new FormControl('filme', [Validators.required]),
    estado: new FormControl('visto', [Validators.required]),
    avaliacao: new FormControl(0),
    genero: new FormControl('', [Validators.required, Validators.minLength(2)]),
    criador: new FormControl('', [Validators.required, Validators.minLength(3)]),
    anoLancamento: new FormControl(2026, [Validators.required]),
    anoFim: new FormControl(null),
  })


  onSubmit() {
    if(this.form.valid) {
      this.service.adicionar(this.form.value as FormConteudo);
      this.router.navigate(['media/lista']);
    } else {
      alert('Por favor, preencha o formulário corretamente.')
    }
  }
}
