import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    { path: 'contato', loadChildren: () => import('./contato/contato.module').then(mod => mod.ContatoModule)},
    { path: 'noticias', loadChildren: () => import('./noticias/noticias.module').then(mod => mod.NoticiasModule)},
    { path: 'instituto', loadChildren: () => import('./instituto/instituto.module').then(mod => mod.InstitutoModule)},
    { path: '', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
