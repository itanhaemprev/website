import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation, query, style, stagger, animate, sequence, group } from '@angular/animations';
import { bounceInLeft, bounceInRight, tada, bounce, bounceIn } from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
