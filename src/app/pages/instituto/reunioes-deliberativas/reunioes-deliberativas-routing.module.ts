import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReunioesDeliberativasComponent } from './reunioes-deliberativas.component';

const routes: Routes = [{path: '', component: ReunioesDeliberativasComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReunioesDeliberativasRoutingModule { }
