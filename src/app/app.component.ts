import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BeneficiariesComponent } from './component/beneficiaries.component';
import { DonateNowComponent } from './component/donationbutton.component';
import { Belt1Component } from './component/belt1.component';
import { NavbarComponent } from './component/navbar.component';
import { FooterComponent } from './component/footer.component';
import { FieldsComponent } from './component/fields.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    BeneficiariesComponent, 
    DonateNowComponent, 
    Belt1Component,
    NavbarComponent,
    FooterComponent,
    FieldsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Karm NGO';
}