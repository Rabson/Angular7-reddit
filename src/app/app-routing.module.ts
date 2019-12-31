import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: () => import('./module/landing-page/landing-page.module').then(m => m.LandingPageModule) },
  // { path: 'not-found', loadChildren: () => import('./module/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '', loadChildren: './module/landing-page/landing-page.module#LandingPageModule' },
  { path: 'not-found', loadChildren: './module/not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
