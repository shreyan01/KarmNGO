import { Component } from '@angular/core';

@Component({
  selector: 'app-donate-now',
  standalone: true,
  template: `
    <button class="fixed bottom-6 z-20 right-6 bg-orange-500 text-white font-bold p-6 rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105" (click)="donate()">
      Donate Now
    </button>
  `,
  styles: []
})
export class DonateNowComponent {
  donate() {
    window.open('https://your-donation-page.com', '_blank');
  }
}
