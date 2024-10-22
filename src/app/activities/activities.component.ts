import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../component/navbar.component';
import { FooterComponent } from '../component/footer.component';

interface Activity {
  title: string;
  description: string;
  date: Date;
  image: string;
}

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent]
})
export class ActivitiesComponent {
  activities: Activity[] = [
    {
      title: 'Community Health Camp',
      description: 'Organized a free health check-up camp for underprivileged communities, providing basic healthcare and medical advice.',
      date: new Date('2023-11-15'),
      image: 'https://placehold.co/800x600?text=Community+Health+Camp'
    },
    {
      title: 'Tree Planting Drive',
      description: 'Conducted a massive tree planting campaign to combat deforestation and promote environmental awareness.',
      date: new Date('2023-07-22'),
      image: 'https://placehold.co/800x600?text=Tree+Planting+Drive'
    },
    {
      title: 'Education for All Initiative',
      description: 'Launched a program to provide free education and school supplies to children from low-income families.',
      date: new Date('2022-09-05'),
      image: 'https://placehold.co/800x600?text=Education+for+All+Initiative'
    },
    {
      title: 'Women Empowerment Workshop',
      description: 'Organized skill development and entrepreneurship workshops for women in rural areas.',
      date: new Date('2022-03-08'),
      image: 'https://placehold.co/800x600?text=Women+Empowerment+Workshop'
    },
    {
      title: 'Clean Water Project',
      description: 'Installed water purification systems in villages lacking access to clean drinking water.',
      date: new Date('2021-06-30'),
      image: 'https://placehold.co/800x600?text=Clean+Water+Project'
    },
    {
      title: 'Disaster Relief Efforts',
      description: 'Provided emergency supplies and support to communities affected by natural disasters.',
      date: new Date('2021-01-15'),
      image: 'https://placehold.co/800x600?text=Disaster+Relief+Efforts'
    }
  ];

  get activityYears(): number[] {
    const years = this.activities.map(activity => activity.date.getFullYear());
    return Array.from(new Set(years)).sort((a, b) => b - a);
  }

  getActivitiesByYear(year: number): Activity[] {
    return this.activities.filter(activity => activity.date.getFullYear() === year);
  }
}
