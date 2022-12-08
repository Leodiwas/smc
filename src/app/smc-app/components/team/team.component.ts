import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Virtual } from 'swiper';
import { Team } from './team.model';
import { TeamService } from './team.service';

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Virtual]);

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  loader: boolean = false;

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    setTimeout(() => (this.loader = true), 500);
  }
}
