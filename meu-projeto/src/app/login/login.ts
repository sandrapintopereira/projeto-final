import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment.development';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private http = inject(HttpClient);
  private router = inject(Router);

  username = '';
  erro = '';
  password = '';

  login() {
    this.http.get<User[]>(`${environment.apiUrl}/users`).subscribe(users => {
      const foundUser = users.find(
          u => u.username === this.username && u.password === this.password
        );

        if (foundUser) {
          this.router.navigate(['/lista']);
        } else {
          this.erro = 'Utilizador inválido ou palavra-passe incorreta.';
        }
      });
    }
 }   