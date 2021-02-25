import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs/operators';

@UntilDestroy()
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  open = false;

  constructor(private router: Router) {
    router.events
      .pipe(
        untilDestroyed(this),
        filter((event) => event instanceof NavigationStart),
      )
      .subscribe(() => (this.open = false));
  }

  ngOnInit(): void {}

  toggleMenu = () => (this.open = !this.open);

  navigate = (url) => this.router.navigateByUrl(url);
}
