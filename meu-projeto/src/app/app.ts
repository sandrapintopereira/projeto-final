import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Aside } from './aside/aside'
import { Footer } from './footer/footer';
import { environment } from '../environments/environment.development';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Aside, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu-projeto');
}

async function loadUsers() {
    if(typeof window === 'undefined') return 
    const response = await fetch(environment.apiUrl + '/users');
    const users = await response.json();

    console.log(users);
  }

loadUsers();

