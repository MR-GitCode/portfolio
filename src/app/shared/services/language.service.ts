import { Injectable } from '@angular/core';

export type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
    lang: Language = 'de';
} 