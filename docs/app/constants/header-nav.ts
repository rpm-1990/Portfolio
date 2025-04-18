import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export interface NavItem {
  title: string;
  link: string;
  className: string;
  activeClassName: string
}

export const navItems: NavItem[] = [
  {
    title: 'About',
    link: 'about',
    className: 'link',
    activeClassName: 'active'
  },
  {
    title: 'Tech Stack',
    link: 'services',
    className: 'link',
    activeClassName: 'active'
  },
  {
    title: 'Experiences',
    link: 'resume',
    className: 'link',
    activeClassName: 'active'
  },
  {
    title: 'Publication',
    link: 'portfolio',
    className: 'link',
    activeClassName: 'active'
  },
  {
    title: 'Let\'s connect !',
    link: 'contacts',
    className: 'btn-contact',
    activeClassName: 'active-btn'
  },
];

export const sidenavAnimations = trigger('slideInOut', [
  state(
    'in',
    style({
      transform: 'translate3d(0,0,0)',
    })
  ),
  state(
    'out',
    style({
      transform: 'translate3d(100%, 0, 0)',
    })
  ),
  transition('in => out', animate('400ms ease-in-out')),
  transition('out => in', animate('400ms ease-in-out')),
]);
