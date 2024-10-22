import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fields',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-800">Fields We Impact</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let field of fields" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
            <div class="h-40 bg-cover bg-center" [style.backgroundImage]="'url(' + field.image + ')'"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ field.name }}</h3>
              <p class="text-gray-600">{{ field.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class FieldsComponent {
  fields = [
    {
      name: 'Education',
      description: 'Providing access to quality education and learning resources for underprivileged communities.',
      image: '/Mission-Education.png'
    },
    {
      name: 'Healthcare',
      description: 'Improving access to essential healthcare services and promoting public health initiatives.',
      image: '/Health.jpg'
    },
    {
      name: 'Environmental Conservation',
      description: 'Protecting natural habitats and promoting sustainable practices to combat climate change.',
      image: '/environment.png'
    },
    {
      name: 'Women Empowerment',
      description: 'Supporting gender equality and providing opportunities for women to thrive in various fields.',
      image: '/girl-education1.jpg'
    },
    {
      name: 'Poverty Alleviation',
      description: 'Implementing programs to reduce poverty and improve the quality of life for vulnerable populations.',
      image: '/employment1.jpg'
    },
    {
      name: 'Disaster Relief',
      description: 'Providing immediate assistance and long-term support to communities affected by natural disasters.',
      image: '/disaster.jpg'
    }
  ];
}
