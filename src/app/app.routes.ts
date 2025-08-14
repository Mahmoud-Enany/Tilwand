import { Routes } from '@angular/router';

export const routes: Routes = [
      {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full'
      },
      {
          path: 'home',
          loadComponent: () => import('./components/home/home').then(m => m.Home),
          title: 'Home' 
      },
      {
          path: 'about',
          loadComponent: () => import('./components/about/about').then(m => m.About),
          title: 'About'
      },
      {
            path: 'contact',
            loadComponent: () => import('./components/contact/contact').then(m => m.Contact),
            title: 'Contact'
      },
      {
          path: '**',
          loadComponent: () => import('./components/page-not-found/page-not-found').then(m => m.PageNotFound),
          title: 'Page Not Found'
      }
];
