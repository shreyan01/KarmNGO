import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../component/navbar.component';
import { FooterComponent } from '../component/footer.component';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent]
})
export class VolunteerComponent {
  volunteerData = {
    name: '',
    email: '',
    phone: '',
    interests: [],
    message: ''
  };

  volunteerOpportunities = [
    {
      title: 'Education Support',
      description: 'Help children in underserved communities with their studies and extracurricular activities.',
      image: 'https://source.unsplash.com/random/400x300?education'
    },
    {
      title: 'Environmental Conservation',
      description: 'Participate in tree planting, beach cleanups, and wildlife conservation projects.',
      image: 'https://source.unsplash.com/random/400x300?environment'
    },
    {
      title: 'Community Health',
      description: 'Assist in health camps, awareness programs, and elderly care initiatives.',
      image: 'https://source.unsplash.com/random/400x300?healthcare'
    }
  ];

  volunteerTestimonials = [
    {
      quote: 'Volunteering with this NGO has been a life-changing experience. Ive learned so much and made a real difference in peoples lives.',
      name: 'Sarah Johnson',
      role: 'Education Volunteer',
      image: 'https://source.unsplash.com/random/100x100?woman'
    },
    {
      quote: 'The team is incredibly supportive, and the projects are well-organized. Im proud to be part of such a meaningful cause.',
      name: 'Michael Chen',
      role: 'Environmental Volunteer',
      image: 'https://source.unsplash.com/random/100x100?man'
    },
    {
      quote: 'Ive gained valuable skills and made lifelong friends while contributing to my community. Its been an amazing journey.',
      name: 'Emily Rodriguez',
      role: 'Healthcare Volunteer',
      image: 'https://source.unsplash.com/random/100x100?woman2'
    }
  ];

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted', this.volunteerData);
    // You can add your logic to send the form data to a server here
  }
}
