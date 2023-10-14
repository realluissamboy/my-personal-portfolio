import { Component } from '@angular/core';
import {
  faInstagram,
  faYoutube,
  faTiktok,
  faGithub,
  faLinkedin,
  faWhatsapp,
  faXTwitter,
  faDiscord,
  faTelegram,
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
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faXTwitter = faXTwitter;
  faDiscord = faDiscord;
  faTelegram = faTelegram;

  showHideMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
