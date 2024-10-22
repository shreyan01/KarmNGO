import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <a routerLink="/" class="text-gradient font-extrabold text-2xl">KarmNGO</a>
          <div class="hidden md:flex space-x-6">
            <a routerLink="/" routerLinkActive="text-blue-600" [routerLinkActiveOptions]="{exact: true}" class="text-gray-800 hover:text-blue-600 transition duration-300">Home</a>
            <a routerLink="/about-us" routerLinkActive="text-blue-600" class="text-gray-800 hover:text-blue-600 transition duration-300">About Us</a>
            <a routerLink="/contact" routerLinkActive="text-blue-600" class="text-gray-800 hover:text-blue-600 transition duration-300">Contact Us</a>
            <a routerLink="/stories" routerLinkActive="text-blue-600" class="text-gray-800 hover:text-blue-600 transition duration-300">Stories</a>
            <a routerLink="/activities" routerLinkActive="text-blue-600" class="text-gray-800 hover:text-blue-600 transition duration-300">Activities</a>
            <a routerLink="/certificate" fragment="certificate" class="text-gray-800 hover:text-blue-600 transition duration-300">Certificate</a>
            <a routerLink="/volunteer" fragment="volunteer" class="text-gray-800 hover:text-blue-600 transition duration-300">Volunteer</a>
          </div>
          <button (click)="toggleDrawer()" class="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Drawer -->
    <div *ngIf="isDrawerOpen" class="fixed inset-0 z-50 md:hidden">
      <div class="fixed inset-0 bg-black bg-opacity-50" (click)="toggleDrawer()"></div>
      <div class="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg">
        <div class="p-4">
          <button (click)="toggleDrawer()" class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="flex flex-col space-y-4">
            <a routerLink="/" routerLinkActive="text-blue-600" [routerLinkActiveOptions]="{exact: true}" class="text-gray-800 hover:text-blue-600 transition duration-300">Home</a>
            <a routerLink="/about-us" routerLinkActive="text-blue-600" class="text-gray-800 hover:text-blue-600 transition duration-300">About Us</a>
            <a routerLink="/contact" routerLinkActive="text-blue-600" class="text-gray-800 hover:text-blue-600 transition duration-300">Contact Us</a>
            <a routerLink="/stories" routerLinkActive="text-blue-600" class="text-gray-800 hover:text-blue-600 transition duration-300">Stories</a>
            <a routerLink="/activities" routerLinkActive="text-blue-600" class="text-gray-800 hover:text-blue-600 transition duration-300">Activities</a>
            <a routerLink="/certificate" fragment="certificate" class="text-gray-800 hover:text-blue-600 transition duration-300">Certificate</a>
            <a routerLink="/volunteer" fragment="volunteer" class="text-gray-800 hover:text-blue-600 transition duration-300">Volunteer</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .text-gradient {
      background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
  `]
})
export class NavbarComponent {
  isDrawerOpen = false;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
}
