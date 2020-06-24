import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return  outlet.activatedRoute;
  }
}
