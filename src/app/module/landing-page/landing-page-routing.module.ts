import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page.component'

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      // { path: ':param1/:param2/:param3/:param4/:param5', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule)},
      { path: '', loadChildren: './home/home.module#HomeModule'},
      { path: ':param1/:param2/:param3/:param4/:param5', loadChildren: './comments/comments.module#CommentsModule'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
