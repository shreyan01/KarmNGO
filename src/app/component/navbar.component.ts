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
          <ul class="flex space-x-6">
            <li><a routerLink="/" routerLinkActive="text-blue-600" [routerLinkActiveOptions]="{exact: true}" class="text-gray-800 hover:text-blue-600 transition duration-300">Home</a></li>
            <li><a routerLink="/about-us" routerLinkActive="text-blue-600" class="text-gray-800 hover:text-blue-600 transition duration-300">About Us</a></li>
            <li><a routerLink="/" fragment="beneficiaries" class="text-gray-800 hover:text-blue-600 transition duration-300">Beneficiaries</a></li>
            <li><a routerLink="/" fragment="partners" class="text-gray-800 hover:text-blue-600 transition duration-300">Partners</a></li>
            <li><a routerLink="/" fragment="donate" class="text-gray-800 hover:text-blue-600 transition duration-300">Donate</a></li>
          </ul>
        </div>
      </div>
    </nav>
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
export class NavbarComponent {}
