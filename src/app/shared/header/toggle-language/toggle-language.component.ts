import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Language, LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-toggle-language',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './toggle-language.component.html',
    styleUrl: './toggle-language.component.scss'
})
export class ToggleLanguageComponent {
  private languageService = inject(LanguageService);
  lang: Language;

  constructor() {
    this.lang = this.languageService.getLanguage();
  }

  select(lang: Language) {
    this.languageService.setLanguage(lang);
    this.lang = lang;  
  }
}