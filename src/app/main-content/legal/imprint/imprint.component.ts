import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../services/language.service';
import { FirestoreContentService } from '../../../services/firestore-content.service';


@Component({
    selector: 'app-imprint',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  languageService = inject(LanguageService);
  contentService = inject(FirestoreContentService);
  
  legalContent = this.contentService.getLegalContent();
}
