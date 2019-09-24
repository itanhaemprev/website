import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisoesComponent } from './divisoes.component';

const routes: Routes = [{path: '', component: DivisoesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisoesRoutingModule { }
