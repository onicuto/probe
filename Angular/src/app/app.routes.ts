import { Routes } from '@angular/router';
import {Login} from './page/auth/login/login';
import {Register} from './page/auth/register/register';
import { Auth } from './page/auth/auth';
import { Error } from './page/error/error';

export const routes: Routes = [
  {
    path: "",
    loadComponent:()=>
      import('./page/dashboard/dashboard').then(m => m.Dashboard)
  },
  { path: "auth", component: Auth,
    children:[
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
      { path: 'register', component: Register }
    ]},
  { path: "**", component: Error}
];
