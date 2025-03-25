import { ApplicationConfig, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Configuration des routes
  ],
};


