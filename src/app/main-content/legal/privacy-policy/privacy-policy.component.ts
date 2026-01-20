import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { FirestoreContentService } from '../../../services/firestore-content.service';

@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
    languageService = inject(LanguageService);
    contentService = inject(FirestoreContentService);
  
    legalContent = this.contentService.getLegalContent();
}
