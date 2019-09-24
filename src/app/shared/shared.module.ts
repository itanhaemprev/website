import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconRegistry } from '@angular/material';

@NgModule({
  exports: [
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
