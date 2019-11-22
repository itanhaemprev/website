import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, query, style, stagger, animate, sequence, group } from '@angular/animations';
import { bounceInLeft, bounceInRight, tada, bounce, bounceIn } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    // animation triggers go here
    trigger('flyInOut', [
      transition('* => *', useAnimation(bounceInLeft)),
    ]),
    trigger('lista-of-news', [
      transition(':enter', [
        group([
          query('.card-noticia', [
            style({ opacity: 0, transform: 'translateY(-100px)' }),
            stagger(200, [
              //animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
              useAnimation(bounceInLeft)
            ])
          ]),
          query('.mat-expansion-panel', [
            style({ opacity: 0, transform: 'translateY(-100px)' }),
            stagger(200, [
              //animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
              useAnimation(bounceInRight)
            ])
          ]),
        ])
      ])
    ]),
    trigger('list-of-services-button', [
      transition(':enter', [
        query('.services-button', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(200, [
            //animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
            useAnimation(bounceIn)
          ])
        ]),
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
