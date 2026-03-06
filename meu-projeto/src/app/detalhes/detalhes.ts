import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ConteudoMediaService } from '../conteudo-service';
import { Conteudo } from '../interfaces/conteudo';

@Component({
  selector: 'app-detalhes-media',
  imports: [RouterLink],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css',
})
export class DetalhesMedia implements OnInit {
  conteudo: Conteudo | undefined;

  constructor(private route: ActivatedRoute, private service: ConteudoMediaService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.conteudo = this.service.buscarPeloId(id);
  }
}
