import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-markus-profile-page',
  templateUrl: './markus-profile-page.component.html',
  styleUrls: ['./markus-profile-page.component.scss'],
})
export class MarkusProfilePageComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

  constructor() {}

  ngOnInit(): void {}
}
