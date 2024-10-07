import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate-now',
  standalone: true,
  template: `
    <button 
      class="fixed bottom-6 z-20 right-6 bg-orange-500 text-white font-bold p-6 rounded-full shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105" 
      [class.vibrate]="isVibrating"
      (click)="donate()">
      Donate Now
    </button>
  `,
  styles: [`
    @keyframes vibrate {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }
    .vibrate {
      animation: vibrate 0.3s linear infinite;
    }
  `]
})
export class DonateNowComponent implements OnInit {
  isVibrating = false;

  ngOnInit() {
    // Remove the setInterval to prevent continuous vibration
  }

  donate() {
    window.open('https://your-donation-page.com', '_blank');
  }
}
