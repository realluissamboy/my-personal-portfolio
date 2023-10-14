import { Component } from '@angular/core';
import {
  faInstagram,
  faYoutube,
  faTiktok,
  faXTwitter,
  faGithub,
  faLinkedin,
  faWhatsapp,
  faDiscord,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTiktok = faTiktok;
  faXTwitter = faXTwitter;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faDiscord = faDiscord;
  faTelegram = faTelegram;
}
