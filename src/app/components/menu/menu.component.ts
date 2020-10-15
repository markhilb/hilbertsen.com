import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  open = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleMenu = () => (this.open = !this.open);

  navigate(url: string) {
    this.open = false;
    document.getElementById('hamburger').classList.remove('white-hamburger');
    this.router.navigateByUrl(url);
  }
}
