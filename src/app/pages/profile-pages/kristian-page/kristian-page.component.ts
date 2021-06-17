import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-kristian-page',
  templateUrl: './kristian-page.component.html',
  styleUrls: ['./kristian-page.component.scss'],
})
export class KristianPageComponent implements OnInit {
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

  constructor() {}

  ngOnInit(): void {}
}
