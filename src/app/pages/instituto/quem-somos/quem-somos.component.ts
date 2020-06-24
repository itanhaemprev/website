import { Component, OnInit } from '@angular/core';
export interface PlanoPrevicenciario {
  vencimentos: number;
  servidor: number;
  prefeitura: number;
  contribuicao: number;
}

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss'],
})
export class QuemSomosComponent implements OnInit {
  planoPrevicendiario: PlanoPrevicenciario[] = [
    {vencimentos: 1000, servidor: 110, prefeitura: 220, contribuicao: 330 },
  ];
  planoFinanceiro: PlanoPrevicenciario[] = [
    {vencimentos: 1000, servidor: 110, prefeitura: 110, contribuicao: 220 },
  ]
  constructor() { }

  ngOnInit() {
  }

}
