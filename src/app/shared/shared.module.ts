import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ]
})
export class SharedModule { }
