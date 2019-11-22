import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../noticias.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {

  noticias: Observable<any>;
  constructor( private NoticiasService: NoticiasService) { }

  ngOnInit() {
    this.getNoticias();
  }

  getNoticias() {
   this.noticias = this.NoticiasService.getAll()
  }

}
