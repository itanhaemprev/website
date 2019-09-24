import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuemSomosRoutingModule } from './quem-somos-routing.module';
import { QuemSomosComponent } from './quem-somos.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [QuemSomosComponent],
  imports: [
    CommonModule,
    QuemSomosRoutingModule,
    SharedModule
  ]
})
export class QuemSomosModule { }
