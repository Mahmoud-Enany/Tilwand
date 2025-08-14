import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isDarkMode = false;

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;


    
    const root = document.documentElement;

    if (this.isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('darkMode', this.isDarkMode ? 'true' : 'false');
  }

  ngOnInit() {
    const darkMode = localStorage.getItem('darkMode');
    this.isDarkMode = darkMode === 'true';

    const root = document.documentElement;
    if (this.isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
}
