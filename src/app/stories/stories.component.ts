import { Component } from '@angular/core';
import { NavbarComponent } from '../component/navbar.component';
import { FooterComponent } from '../component/footer.component';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  standalone: true,
  imports: [NavbarComponent, FooterComponent]
})
export class StoriesComponent {
  closeDialog(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('group-hover:opacity-100')) {
      target.classList.remove('group-hover:opacity-100', 'group-hover:visible');
      target.classList.add('opacity-0', 'invisible');
    }
  }
}
