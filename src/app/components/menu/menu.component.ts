import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  open = true;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu = () => (this.open = !this.open);
}
