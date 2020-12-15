import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MenuService } from '../../services/menu.service';

@UntilDestroy()
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  open = false;
  whiteBg = false;

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.menuService
      .getAddWhiteBackground()
      .pipe(untilDestroyed(this))
      .subscribe(() => (this.whiteBg = true));

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.open = false;
        this.whiteBg = false;
      }
    });
  }

  toggleMenu = () => (this.open = !this.open);
}
