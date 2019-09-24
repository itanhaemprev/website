import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstitutoRoutingModule } from './instituto-routing.module';
import { InstitutoComponent } from './instituto.component';

@NgModule({
  declarations: [InstitutoComponent],
  imports: [
    CommonModule,
    InstitutoRoutingModule
  ]
})
export class InstitutoModule { }
