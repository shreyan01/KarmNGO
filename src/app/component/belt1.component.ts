import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'belt',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div *ngFor="let partner of partners" class="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
          <img [src]="partner.image" [alt]="partner.name" class="w-full h-32 object-cover">
          <div class="p-2 text-center">
            <h3 class="text-sm font-semibold truncate">{{ partner.name }}</h3>
          </div>
        </div>
      </div>
    </div>
    `,
    styles: []
})
export class Belt1Component {
    partners = [
        { name: 'Global Health Initiative', image: 'https://via.placeholder.com/150?text=GHI' },
        { name: 'Education for All', image: 'https://via.placeholder.com/150?text=EFA' },
        { name: 'Clean Water Project', image: 'https://via.placeholder.com/150?text=CWP' },
        { name: 'Sustainable Agriculture', image: 'https://via.placeholder.com/150?text=SA' },
        { name: 'Women Empowerment', image: 'https://via.placeholder.com/150?text=WE' },
        { name: 'Child Rights Protection', image: 'https://via.placeholder.com/150?text=CRP' },
        { name: 'Disaster Relief Network', image: 'https://via.placeholder.com/150?text=DRN' },
        { name: 'Green Earth Alliance', image: 'https://via.placeholder.com/150?text=GEA' },
        { name: 'Tech for Good', image: 'https://via.placeholder.com/150?text=TFG' },
        { name: 'Arts & Culture Foundation', image: 'https://via.placeholder.com/150?text=ACF' },
    ];
}