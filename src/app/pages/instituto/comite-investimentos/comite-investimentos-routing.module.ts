import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComiteInvestimentosComponent } from './comite-investimentos.component';

const routes: Routes = [{path: '', component: ComiteInvestimentosComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComiteInvestimentosRoutingModule { }
