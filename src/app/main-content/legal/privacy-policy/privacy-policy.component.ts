import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { FirestoreContentService } from '../../../shared/services/firestore-content.service';

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
