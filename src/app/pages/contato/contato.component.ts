import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from 'src/app/animations';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
