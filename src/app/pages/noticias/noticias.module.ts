import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';
import { NoticiasListComponent } from './noticias-list/noticias-list.component';
import { NoticiasViewComponent } from './noticias-view/noticias-view.component';
import { NoticiasService } from '../noticias.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NoticiasComponent, NoticiasListComponent, NoticiasViewComponent],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    SharedModule,
    HttpClientModule
  ],

  providers: [
    NoticiasService
  ]
})
export class NoticiasModule { }
