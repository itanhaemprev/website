import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state, group } from '@angular/animations';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  animations: [
    // animation triggers go here
    trigger('flyInOut', [
      state('in', style({
        transform: 'translateX(0)', opacity: 1
      })),
      transition(':enter', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition(':leave', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
