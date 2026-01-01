import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideFirebaseApp(() => 
      initializeApp({
        "projectId":"portfolio-9193e",
        "appId":"1:810595684906:web:5e4452dde40aec9e502953",
        "storageBucket":"portfolio-9193e.firebasestorage.app",
        "apiKey":"AIzaSyA5yXPr8nE11OFdRvcn79seetE_tELel8w",
        "authDomain":"portfolio-9193e.firebaseapp.com",
        "messagingSenderId":"810595684906",
        // "projectNumber":"810595684906",
        // "version":"2"
      })),
    provideFirestore(() =>getFirestore()),
    provideStorage(() => getStorage())
  ]
};
