// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { routeConfig } from './app/routes';

// bootstrapApplication(AppComponent, {
//   providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
// }).catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    ...(appConfig?.providers || []), // Include existing providers from appConfig
    provideRouter(routeConfig), // Add router provider
  ],
}).catch((err) => console.error(err));
