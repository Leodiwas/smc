import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showNav: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }

  onToggle(e: Event) {
    const btnToggler = (e.target as Element).closest('.navbar_nav-toggler');
    if (!btnToggler) return;

    btnToggler.classList.toggle('toggler-open');
    if (btnToggler.classList.contains('toggler-open'))
      this.showNav = !this.showNav;
    else this.showNav = !this.showNav;
  }
}
