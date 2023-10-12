import { Component } from '@angular/core';
import {
  faInstagram,
  faYoutube,
  faTiktok,
  faWhatsapp,
  faMeta,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent {
  menuVisible = false;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTiktok = faTiktok;
  faWhatsapp = faWhatsapp;
  faMeta = faMeta;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  showHideMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
