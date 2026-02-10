import { Injectable } from '@angular/core';

export type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'mr-language';
  lang: Language;

  constructor() {
    this.lang = this.getLanguageFromStorage();
  }

  private getLanguageFromStorage(): Language {
    const storedLang = localStorage.getItem(this.STORAGE_KEY);
    return (storedLang === 'en' || storedLang === 'de') ? storedLang : 'de';
  }

  setLanguage(language: Language): void {
    this.lang = language;
    localStorage.setItem(this.STORAGE_KEY, language);
  }

  getLanguage(): Language {
    return this.lang;
  }
}