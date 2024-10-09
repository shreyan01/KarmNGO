import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../component/navbar.component';
import { FooterComponent } from '../component/footer.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent, FooterComponent]
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted', this.contactData);
    // You can add your logic to send the form data to a server here
  }
}
