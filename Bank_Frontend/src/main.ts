import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';  // Use provideHttpClient

// Bootstrap the app with provideHttpClient to provide HttpClient globally
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]  // Providing HttpClient globally in standalone apps
});
