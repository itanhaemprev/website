import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LogoComponent } from './layout/header/logo/logo.component';


@NgModule({
  declarations: [PagesComponent, HeaderComponent, FooterComponent, LogoComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ],
})
export class PagesModule {
}
