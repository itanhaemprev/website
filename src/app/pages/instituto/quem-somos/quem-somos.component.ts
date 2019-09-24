import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state, group } from '@angular/animations';
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
  animations: [
    // animation triggers go here
    trigger('flyInOut', [
      state('in', style({
        width: 120,
        transform: 'translateX(0)', opacity: 1
      })),
      transition('void => *', [
        style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
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
