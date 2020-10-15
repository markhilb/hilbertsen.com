import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
} from '@angular/animations';

const moveIn = [
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        position: 'absolute',
        height: '100vh',
        width: '100%',
      }),
    ],
    { optional: true },
  ),

  query(':enter', [style({ opacity: 0, transform: 'scale(.7,.7)' })]),
  group([
    query(
      ':leave',
      group([
        animate('200ms ease-out', style({ opacity: 0 })),
        animate('500ms ease-out', style({ transform: 'scale(1.1,1.1)' })),
      ]),
      { optional: true },
    ),
    query(
      ':enter',
      group([
        animate('200ms ease-out', style({ opacity: 1 })),
        animate('500ms ease-out', style({ transform: 'scale(1,1)' })),
      ]),
    ),
  ]),
];

const moveOut = [
  style({ position: 'relative' }),
  query(
    ':enter, :leave',
    [
      style({
        position: 'absolute',
        height: '100vh',
        width: '100%',
      }),
    ],
    { optional: true },
  ),

  query(':enter', [style({ opacity: 0, transform: 'scale(1.1,1.1)' })]),
  group([
    query(
      ':leave',
      group([
        animate('200ms ease-out', style({ opacity: 0 })),
        animate('500ms ease-out', style({ transform: 'scale(.7,.7)' })),
      ]),
      { optional: true },
    ),
    query(
      ':enter',
      group([
        animate('200ms 150ms ease-out', style({ opacity: 1 })),
        animate('500ms 150ms ease-out', style({ transform: 'scale(1,1)' })),
      ]),
    ),
  ]),
];

const slideLeft = [
  style({ position: 'relative' }),
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
    optional: true,
  }),
  query(':enter', [style({ right: '-100%' })]),
  group([
    query(':leave', [animate('200ms ease-out', style({ right: '100%' }))]),
    query(':enter', [animate('200ms ease-out', style({ right: '0%' }))]),
  ]),
];

const slideRight = [
  style({ position: 'relative' }),
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
    optional: true,
  }),
  query(':enter', [style({ left: '-100%' })]),
  group([
    query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
    query(':enter', [animate('200ms ease-out', style({ left: '0%' }))]),
  ]),
];

export const animations = trigger('routeAnimations', [
  // Going from one page to another
  transition('markus => *', slideLeft),
  transition('andreas => markus', slideRight),
  transition('andreas => kristian', slideLeft),
  transition('kristian => *', slideRight),

  // Loading/refreshing a page
  transition('* => *', moveIn),
]);
