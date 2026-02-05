import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { FirestoreContentService } from '../../../services/firestore-content.service';

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