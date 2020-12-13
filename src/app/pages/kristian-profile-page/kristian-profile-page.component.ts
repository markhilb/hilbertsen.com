import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-kristian-profile-page',
  templateUrl: './kristian-profile-page.component.html',
  styleUrls: ['./kristian-profile-page.component.scss'],
})
export class KristianProfilePageComponent implements OnInit {
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

  constructor() {}

  ngOnInit(): void {
    document.getElementById('hamburger').classList.add('white-background');
  }
}
