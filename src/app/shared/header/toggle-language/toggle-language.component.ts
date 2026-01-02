import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

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
  lang: 'en' | 'de' = 'de';

  @Output() langChange = new EventEmitter<'en' | 'de'>();

  select(lang: 'en' | 'de') {
    this.lang = lang;
    this.langChange.emit(lang);
  }
}
