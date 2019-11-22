import { Component, OnInit } from '@angular/core';
import { trigger, transition, query, stagger, useAnimation } from '@angular/animations';
import { slideInUp, zoomIn, fadeIn } from 'ng-animate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('menu-button-animate', [
      transition(':enter', [
        query('a',[ 
          stagger(100, [
            useAnimation(fadeIn)
          ])
        ])
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
