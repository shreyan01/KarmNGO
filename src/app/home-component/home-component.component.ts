import { Component } from '@angular/core';
import { BeneficiariesComponent } from '../component/beneficiaries.component';
import { Belt1Component } from '../component/belt1.component';
import { FooterComponent } from '../component/footer.component';
import { NavbarComponent } from '../component/navbar.component';
import { DonateNowComponent } from '../component/donationbutton.component';
import { FieldsComponent } from '../component/fields.component';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [BeneficiariesComponent, Belt1Component, FooterComponent, NavbarComponent, DonateNowComponent, FieldsComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
