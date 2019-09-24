import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasComponent } from './noticias.component';
import { NoticiasListComponent } from './noticias-list/noticias-list.component';
import { NoticiasViewComponent } from './noticias-view/noticias-view.component';

const routes: Routes = [{
  path: '',
  component: NoticiasComponent,
  children: [
    {
      path: '',
      component: NoticiasListComponent
    }, {
      path: ':id',
      component: NoticiasViewComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticiasRoutingModule { }
