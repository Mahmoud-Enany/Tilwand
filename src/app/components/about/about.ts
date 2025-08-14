import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  //list of photos
  photos: string[] = [
    '/card1.jpg',
    '/card2.jpg',
    '/card3.jpg',
    '/card4.jpg',
    '/card5.jpg',
    '/card6.jpg',
    '/card1.jpg',
    '/card2.jpg',
    '/card3.jpg'
  ];
}
