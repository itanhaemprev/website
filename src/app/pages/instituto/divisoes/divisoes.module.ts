import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisoesRoutingModule } from './divisoes-routing.module';
import { DivisoesComponent } from './divisoes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DivisoesComponent],
  imports: [
    CommonModule,
    DivisoesRoutingModule,
    SharedModule
  ]
})
export class DivisoesModule { }
