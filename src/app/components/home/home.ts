import { AfterViewInit, Component, } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements AfterViewInit{
  items = Array(6).fill(null);

  ngAfterViewInit(): void {
    const items = document.querySelectorAll('[data-carousel-item]');
    if (items.length > 0) {
      import('flowbite').then(flowbite => {
        flowbite.initCarousels();
      });
    }
  }
}
