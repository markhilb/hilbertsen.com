import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-andreas-page',
  templateUrl: './andreas-page.component.html',
  styleUrls: ['./andreas-page.component.scss'],
})
export class AndreasPageComponent implements OnInit {
  faEnvelope = faEnvelope;
  faFacebook = faFacebook;
  faInstagram = faInstagram;

  constructor() {}

  ngOnInit(): void {}
}
