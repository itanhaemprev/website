import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
}, {
  path: '',
  loadChildren: () => import('./pages/pages.module').then(mod => mod.PagesModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
