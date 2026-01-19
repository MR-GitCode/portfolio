import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

import { RouterLink } from '@angular/router';
import { FirestoreContentService } from '../../../services/firestore-content.service';


@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [
    RouterLink
],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {
  languageService = inject(LanguageService);
  contentService = inject(FirestoreContentService);

  navContent = this.contentService.getNavContent();
}
