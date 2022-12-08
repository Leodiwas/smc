import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNOtFoundComponent } from './smc-app/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/smc/home',
    pathMatch: 'full',
  },
  {
    path: 'smc',
    loadChildren: () => import('./smc-app/smc.module').then((m) => m.SmcModule),
  },
  {
    path: '**',
    component: PageNOtFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
