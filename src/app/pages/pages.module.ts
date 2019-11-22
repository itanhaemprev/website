import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TopBarComponent } from './layout/header/top-bar/top-bar.component';
import { LogoComponent } from './layout/header/logo/logo.component';
import { MenuComponent } from './layout/header/menu/menu.component';


@NgModule({
  declarations: [PagesComponent, HeaderComponent, FooterComponent, TopBarComponent, LogoComponent, MenuComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
})
export class PagesModule { }
