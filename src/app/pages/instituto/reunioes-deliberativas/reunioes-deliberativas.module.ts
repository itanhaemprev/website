import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReunioesDeliberativasRoutingModule } from './reunioes-deliberativas-routing.module';
import { ReunioesDeliberativasComponent } from './reunioes-deliberativas.component';

@NgModule({
  declarations: [ReunioesDeliberativasComponent],
  imports: [
    CommonModule,
    ReunioesDeliberativasRoutingModule
  ]
})
export class ReunioesDeliberativasModule { }
