import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';
import { CarouselComponent } from './carousel/carousel.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent, CarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxHmCarouselModule,
    SharedModule
  ]
})
export class HomeModule { }
