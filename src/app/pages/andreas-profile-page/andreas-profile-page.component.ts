import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-andreas-profile-page',
  templateUrl: './andreas-profile-page.component.html',
  styleUrls: ['./andreas-profile-page.component.scss'],
})
export class AndreasProfilePageComponent implements OnInit {
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

  constructor() {}

  ngOnInit(): void {}
}
