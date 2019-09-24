import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CronogramaAcoesRoutingModule } from './cronograma-acoes-routing.module';
import { CronogramaAcoesComponent } from './cronograma-acoes.component';

@NgModule({
  declarations: [CronogramaAcoesComponent],
  imports: [
    CommonModule,
    CronogramaAcoesRoutingModule
  ]
})
export class CronogramaAcoesModule { }
