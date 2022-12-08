import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/servicess/services.component';
import { TeamComponent } from './components/team/team.component';
import { SmcAppComponent } from './smc-app.component';

const routes: Routes = [
  {
    path: '',
    component: SmcAppComponent,
    children: [
      {
        path: '',
        redirectTo: '/smc/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
      },
      {
        path: 'services',
        component: ServicesComponent,
      },
      {
        path: 'team',
        component: TeamComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmcRoutingModule {}
