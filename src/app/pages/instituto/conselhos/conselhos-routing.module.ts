import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConselhosComponent } from './conselhos.component';

const routes: Routes = [
  {path: '', component: ConselhosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConselhosRoutingModule { }
