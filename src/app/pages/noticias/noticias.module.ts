import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticiasRoutingModule } from './noticias-routing.module';
import { NoticiasComponent } from './noticias.component';
import { NoticiasListComponent } from './noticias-list/noticias-list.component';
import { NoticiasViewComponent } from './noticias-view/noticias-view.component';

@NgModule({
  declarations: [NoticiasComponent, NoticiasListComponent, NoticiasViewComponent],
  imports: [
    CommonModule,
    NoticiasRoutingModule
  ]
})
export class NoticiasModule { }
