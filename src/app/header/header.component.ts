import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
export class HeaderComponent implements OnInit {
  //social media
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTiktok = faTiktok;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faWhatsapp = faWhatsapp;
  faXTwitter = faXTwitter;
  faDiscord = faDiscord;
  faTelegram = faTelegram;

  //menu routing
  currentRoute: string = '';

  constructor(
    private router: Router,
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  //menu
  menuVisible = false;
  onMenuItemClick() {
    this.menuVisible = false;
  }
  showHideMenu(event: Event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    this.menuVisible = !this.menuVisible;
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });

    this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.el.nativeElement.contains(event.target) && this.menuVisible) {
        this.menuVisible = false;
      }
    });
  }
}
