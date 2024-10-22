import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ContactComponent } from './contact/contact.component';
import { StoriesComponent } from './stories/stories.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CertificateComponent } from './certificate/certificate.component';

export const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: '', component: HomeComponentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'certificate', component: CertificateComponent }
];
