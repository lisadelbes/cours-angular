import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(), provideFirebaseApp(() => initializeApp({ projectId: "lisa-s-project-37839", appId: "1:898218038354:web:a8b23eeecc3b23a9797b8b", databaseURL: "https://lisa-s-project-37839-default-rtdb.europe-west1.firebasedatabase.app", storageBucket: "lisa-s-project-37839.firebasestorage.app", apiKey: "AIzaSyC8DNWUjedltLkBoOc7FhSG1H4TzbYm9Kk", authDomain: "lisa-s-project-37839.firebaseapp.com", messagingSenderId: "898218038354" })), provideAuth(() => getAuth()), provideDatabase(() => getDatabase())
  ]
};
