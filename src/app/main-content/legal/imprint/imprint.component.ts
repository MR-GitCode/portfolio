import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { FirestoreContentService } from '../../../shared/services/firestore-content.service';

@Component({
    selector: 'app-imprint',
    standalone: true,
    imports: [],
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  languageService = inject(LanguageService);
  contentService = inject(FirestoreContentService);
  legalContent = this.contentService.getLegalContent();
}