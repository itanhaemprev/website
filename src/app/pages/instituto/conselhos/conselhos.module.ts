import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConselhosRoutingModule } from './conselhos-routing.module';
import { ConselhosComponent } from './conselhos.component';

@NgModule({
  declarations: [ConselhosComponent],
  imports: [
    CommonModule,
    ConselhosRoutingModule
  ]
})
export class ConselhosModule { }
