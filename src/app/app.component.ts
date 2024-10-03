import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BeneficiariesComponent } from './component/beneficiaries.component';
import { DonateNowComponent } from './component/donationbutton.component';
import { Belt1Component } from './component/belt1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BeneficiariesComponent, DonateNowComponent, Belt1Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Karm NGO';
}