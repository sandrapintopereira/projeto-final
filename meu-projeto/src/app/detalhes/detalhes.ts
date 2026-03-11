import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ConteudoMediaService } from '../conteudo-service';
import { Conteudo } from '../interfaces/conteudo';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-detalhes-media',
  imports: [RouterLink, TitleCasePipe],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css',
})
export class DetalhesMedia implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(ConteudoMediaService);

  conteudo: Conteudo | undefined;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.conteudo = this.service.buscarPeloId(id);
  }
}
