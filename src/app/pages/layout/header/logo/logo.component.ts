import { Component, OnInit } from '@angular/core';
import { trigger, sequence, query, stagger, useAnimation, transition } from '@angular/animations';
import { bounceInUp, flip } from 'ng-animate';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: [
    trigger('animation-logo', [
      transition(':enter',[
        query('.logo', [
          useAnimation(flip)
        ])
        
      ])
    ])
  ]
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
