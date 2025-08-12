import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; 
import { TasksComponent } from './app/components/tasks/tasks.component';
import { AboutComponent } from './app/components/about/about.component';

const appRoutes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient()
  ]
})
  .catch(err => console.error(err));