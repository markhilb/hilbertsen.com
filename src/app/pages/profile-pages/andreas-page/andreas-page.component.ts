import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-andreas-page',
  templateUrl: './andreas-page.component.html',
  styleUrls: ['./andreas-page.component.scss'],
})
export class AndreasPageComponent implements OnInit {
  faUser = faUser;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

  constructor() {}

  ngOnInit(): void {}
}
