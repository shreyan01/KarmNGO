import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommonModule, isPlatformBrowser } from '@angular/common'; // Add this import

var window: Window & typeof globalThis
@Component({
  selector: 'app-beneficiaries',
  standalone:true,
  imports:[CommonModule],
  template: `
    <div class="container mx-auto px-4 py-8">
      <h2 class="text-4xl text-center font-bold mb-6">Current Beneficiaries</h2>
      
      <div class="relative overflow-hidden text-center shadow-md h-64 max-w-3xl mx-auto">
        <div class="flex transition-transform duration-500 ease-in-out" [style.transform]="'translateX(-' + (currentIndex * 100) + '%)'">
          <div *ngFor="let card of cards; let i = index" class="w-full flex-shrink-0">
            <div class="bg-white rounded-lg shadow-md p-4">
              <img [src]="card.image" [alt]="'Beneficiary ' + (i + 1)" class="w-24 h-24 object-cover rounded-full mx-auto mb-3">
              <h3 class="text-lg font-semibold mb-1">{{ card.name }}</h3>
              <p class="text-sm text-gray-600">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="flex justify-center mt-4">
        <div *ngFor="let dot of cards; let i = index" 
             class="w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-300"
             [class.bg-blue-500]="i === currentIndex"
             [class.bg-gray-300]="i !== currentIndex"
             (click)="goToCard(i)">
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class BeneficiariesComponent implements OnInit, OnDestroy {
  cards = [
    { name: 'Baby Ananya', description: 'Ananya is fighting for her life from rare ABC MEDIAL CANCER', image: '/baneficiary1.jpg' },
    { name: 'Pinky Devi', description: 'PINKY DEVI”  A mother of 2 children and she is suffering from a life threatening CHRONIC KIDNEY DISEASE.', image: '/beneficiary2.jpg' },
    { name: 'Pragya', description: 'Pragya, who is 3 years, 7 months old has been diagnosed with Blood Cancer', image: '/beneficiary3.png' },
    { name: 'Alice Brown', description: 'Ut labore et dolore magna aliqua', image: 'https://via.placeholder.com/150' },
  ];

  currentIndex = 0;
  private autoScrollSubscription!: Subscription; // Added definite assignment operator

  
  ngOnInit() {
    // Ensure this runs only in the browser, not during SSR
  
    if (isPlatformBrowser(window)) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.autoScrollSubscription = interval(5000).subscribe(() => {
      this.nextCard();
    });
  }

  stopAutoScroll() {
    if (this.autoScrollSubscription) {
      this.autoScrollSubscription.unsubscribe();
    }
  }

  nextCard() {
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
  }

  goToCard(index: number) {
    this.currentIndex = index;
    this.stopAutoScroll();
    this.startAutoScroll();
  }
}