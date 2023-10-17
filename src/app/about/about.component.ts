import { Component } from '@angular/core';
import boxes from '../../assets/data/bio-data.json';

interface Box {
  title: string;
  content: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  boxes: Box[] = boxes;

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
