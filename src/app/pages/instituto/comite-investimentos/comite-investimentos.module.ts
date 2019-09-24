import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComiteInvestimentosRoutingModule } from './comite-investimentos-routing.module';
import { ComiteInvestimentosComponent } from './comite-investimentos.component';

@NgModule({
  declarations: [ComiteInvestimentosComponent],
  imports: [
    CommonModule,
    ComiteInvestimentosRoutingModule
  ]
})
export class ComiteInvestimentosModule { }
