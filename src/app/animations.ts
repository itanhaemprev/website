import { trigger, transition, style, query, animateChild, group, animate, useAnimation } from '@angular/animations';
import {  zoomIn, zoomOut } from 'ng-animate';
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 1
        })
      ], {optional: true}),
      query(':enter', [
        style({ top: '-10%', opacity: 0})
      ],{optional: true}),
      query(':leave', animateChild(),{optional: true}),
      group([
        query(':leave', [
          animate('300ms ease-in-out', style({ top: '10%', opacity: 0})),
          
        ],{optional: true}),
        query(':enter', [
          animate('300ms ease-in-out', style({ top: 0, opacity: 1}))
        ],{optional: true})
      ]),
      query(':enter', animateChild(),{optional: true}),
    ]),
  ]);

