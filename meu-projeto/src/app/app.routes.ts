import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ListaMedia } from './lista/lista';
import { DetalhesMedia } from './detalhes/detalhes';
import { FormularioMedia } from './formulario/formulario';
import { AtualizarConteudo } from './atualizar-conteudo/atualizar-conteudo';

export const routes: Routes = [
    {path: '', component: Dashboard},
    {path: 'lista', component: ListaMedia},
    {path: 'lista/new', component: FormularioMedia},
    {path: 'detalhe/:id', component: DetalhesMedia},
    {path: 'atualizar/:id', component: AtualizarConteudo}
];
