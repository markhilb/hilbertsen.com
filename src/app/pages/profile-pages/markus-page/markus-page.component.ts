import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-markus-page',
  templateUrl: './markus-page.component.html',
  styleUrls: ['./markus-page.component.scss'],
})
export class MarkusPageComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  constructor() {}

  ngOnInit(): void {}
}
