import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce, bounceIn, bounceOut, bounceInLeft } from "ng-animate";
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  animations: [
    // animation triggers go here
    trigger('flyInOut', [
      transition('* => *', useAnimation(bounceInLeft)),
    ])
      
  ]
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
