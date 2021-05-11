import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'two',
    loadChildren: () => import('./two/two.module').then( m => m.TwoPageModule)
  },
  {
    path: 'three',
    loadChildren: () => import('./three/three.module').then( m => m.ThreePageModule)
  },
  {
    path: 'four',
    loadChildren: () => import('./four/four.module').then( m => m.FourPageModule)
  },
  {
    path: 'six',
    loadChildren: () => import('./six/six.module').then( m => m.SixPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
