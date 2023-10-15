import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  boxes = [
    {
      title: '🚀 Professionally Speaking…',
      content:
        'I’m a dedicated Full Stack Software Engineer, specializing in web application development. My portfolio showcases a myriad of projects, reflecting a wealth of experience gleaned from working with some of the world’s renowned companies like Verizon, Zillow, and the New York Times.',
    },
    {
      title: '👨‍👩‍👧 A Peek into My Personal World…',
      content:
        "Off the tech scene, I'm a devoted husband and father. My journey has been diverse and enriching, from serving in the United States Marine Corps to navigating B2B sales for major corporations. These varied experiences not only make me versatile but also equip me with insights into the diverse challenges you might be encountering.",
    },
    { title: 'Personal Info', content: 'I live in 123...' },
  ];
  currentIndex = 0;

  nextBox(): void {
    if (this.currentIndex < this.boxes.length - 1) {
      this.currentIndex++;
    }
  }

  prevBox(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
