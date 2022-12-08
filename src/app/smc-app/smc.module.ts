import { NgModule } from '@angular/core';

import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { SmcAppComponent } from './smc-app.component';
import { SmcRoutingModule } from './smc-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { TeamComponent } from './components/team/team.component';
import { TeamCardComponent } from './components/team/team-card/team-card.component';
import { ServicesComponent } from './components/servicess/services.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
    SmcAppComponent,
    ContactComponent,
    TeamComponent,
    TeamCardComponent,
    ServicesComponent,
  ],
  imports: [SmcRoutingModule, SharedModule],
})
export class SmcModule {}
