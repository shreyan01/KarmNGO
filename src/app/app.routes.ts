import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: '', component: HomeComponentComponent },
  { path: 'contact', component: ContactComponent }
];
