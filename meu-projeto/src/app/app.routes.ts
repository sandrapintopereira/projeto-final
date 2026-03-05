import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { ListaMedia } from './lista-media/lista-media';
import { DetalhesMedia } from './detalhes-media/detalhes-media';
import { FormularioMedia } from './formulario-media/formulario-media';

export const routes: Routes = [
    {path: '', component: Dashboard},
    {path: 'media', component: ListaMedia},
    {path: 'media/new', component: FormularioMedia},
    {path: 'media/:id', component: DetalhesMedia},
];
