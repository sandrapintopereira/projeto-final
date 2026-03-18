import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Supabase } from '../services/supabase';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
  private supabaseService = inject(Supabase)

  username = '';
  erro = '';
  password = '';

  async login() {
    this.erro = '';

    const user = await this.supabaseService.login(this.username, this.password);

        if (user) {
          this.router.navigate(['/lista']);
        } else {
          this.erro = 'Utilizador inválido ou palavra-passe incorreta.';
        }
  }

  async registar() {
    this.erro = '';

    const userNovo = this.username.trim();
    const passwordNova = this.password.trim();

    if(!userNovo || !passwordNova) {
      this.erro = 'Preencha username e password.';
      return;
    };

    const created = await this.supabaseService.createUser(userNovo, passwordNova);

    if(!created) {
      this.erro = 'Erro ao criar utilizador.';
      return;
    }
  };
}
  