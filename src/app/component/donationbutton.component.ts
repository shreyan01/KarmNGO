import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-now',
  standalone: true,
  template: `
    <button 
      class="fixed bottom-8 z-20 right-8 bg-gradient-to-r from-green-300 to-green-400 text-white font-extrabold w-32 h-32 rounded-full shadow-xl hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-110 pulse flex flex-col items-center justify-center" 
      (click)="donate()">
      <span class="text-lg mb-1">Donate</span>
      <span class="text-xl">Now!</span>
    </button>
  `,
  styles: [`
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.5); }
    }
    .pulse {
      animation: pulse 1s infinite;
    }
  `]
})
export class DonateNowComponent implements OnInit {
  ngOnInit() {
    // Initialization logic if needed
  }

  donate() {
    window.open('https://your-donation-page.com', '_blank');
  }
}
