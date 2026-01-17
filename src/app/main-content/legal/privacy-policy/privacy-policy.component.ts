import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { LegalContent } from '../../../interfaces/legal-content.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-privacy-policy',
    imports: [
        CommonModule
    ],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  languageService = inject(LanguageService);
  private readonly firestore = inject(Firestore);
  readonly legalContent$: Observable<LegalContent> = docData(
  doc(this.firestore, 'siteContent', 'legal')
  ) as Observable<LegalContent>;
}
