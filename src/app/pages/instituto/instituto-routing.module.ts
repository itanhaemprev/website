import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstitutoComponent } from './instituto.component';

const routes: Routes = [
  {
    path: '',
    component: InstitutoComponent,
    children: [
      {
        path: '',
        redirectTo: 'quem-somos'
      }, {
        path: 'quem-somos',
        loadChildren: () => import('./quem-somos/quem-somos.module').then(mod => mod.QuemSomosModule)
      }, {
        path: 'conselhos',
        loadChildren: () => import('./conselhos/conselhos.module').then(mod => mod.ConselhosModule)
      }, {
        path: 'diretoria-e-divisoes',
        loadChildren: () => import('./divisoes/divisoes.module').then(mod => mod.DivisoesModule)
      }, {
        path: 'comite-investimentos',
        loadChildren: () => import('./comite-investimentos/comite-investimentos.module').then(mod => mod.ComiteInvestimentosModule)
      }, {
        path: 'reunioes-deliberativas',
        loadChildren: () => import('./reunioes-deliberativas/reunioes-deliberativas.module').then(mod => mod.ReunioesDeliberativasModule)
      }, {
        path: 'cronograma-de-acoes',
        loadChildren: () => import('./cronograma-acoes/cronograma-acoes.module').then(mod => mod.CronogramaAcoesModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutoRoutingModule { }
