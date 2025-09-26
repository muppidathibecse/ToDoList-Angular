import { Routes } from '@angular/router';
import { Check } from './components/check/check';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: 'check', component: Check },
  { path: 'home', component: Home },
];
