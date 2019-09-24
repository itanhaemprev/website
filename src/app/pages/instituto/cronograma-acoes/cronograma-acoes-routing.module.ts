import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CronogramaAcoesComponent } from './cronograma-acoes.component';

const routes: Routes = [{path: '', component: CronogramaAcoesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CronogramaAcoesRoutingModule { }
