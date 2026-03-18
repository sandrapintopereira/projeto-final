import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ListaMedia } from './lista/lista';
import { DetalhesMedia } from './detalhes/detalhes';
import { FormularioMedia } from './formulario/formulario';
import { AtualizarConteudo } from './atualizar-conteudo/atualizar-conteudo';
import { About } from './about/about';
import { Login } from './login/login';

export const routes: Routes = [
    {path: '', component: Login},
    {path: 'dashboard', component: Dashboard},
    {path: 'lista', component: ListaMedia},
    {path: 'lista/new', component: FormularioMedia},
    {path: 'detalhe/:id', component: DetalhesMedia},
    {path: 'atualizar/:id', component: AtualizarConteudo},
    {path: 'about', component: About},
    {path: 'login', component: Login},
];
