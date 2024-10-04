import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-full shadow-lg w-11/12 max-w-7xl">
      <div class="mx-auto px-6 sm:px-8 lg:px-10">
        <div class="flex items-center justify-between h-16">
          <a href="#" class="text-gradient font-extrabold text-2xl">KarmNGO</a>
          <button (click)="toggleDrawer()" class="text-white focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Drawer Menu -->
    <div *ngIf="isDrawerOpen" class="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
      <div class="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
           [ngClass]="{'translate-x-0': isDrawerOpen, 'translate-x-full': !isDrawerOpen}">
        <div class="p-5">
          <button (click)="toggleDrawer()" class="absolute top-3 right-3 text-gray-600 hover:text-gray-800">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <ul class="mt-8">
            <li class="mb-4"><a href="#about" class="text-gray-800 hover:text-blue-600 transition duration-300" (click)="toggleDrawer()">About</a></li>
            <li class="mb-4"><a href="#beneficiaries" class="text-gray-800 hover:text-blue-600 transition duration-300" (click)="toggleDrawer()">Beneficiaries</a></li>
            <li class="mb-4"><a href="#partners" class="text-gray-800 hover:text-blue-600 transition duration-300" (click)="toggleDrawer()">Partners</a></li>
            <li class="mb-4"><a href="#donate" class="text-gray-800 hover:text-blue-600 transition duration-300" (click)="toggleDrawer()">Donate</a></li>
          </ul>
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
