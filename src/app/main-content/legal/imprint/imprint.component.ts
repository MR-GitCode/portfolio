import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LanguageService } from '../../../services/language.service';
import { LegalContent } from '../../../interfaces/legal-content.interface';


@Component({
    selector: 'app-imprint',
    imports: [
        CommonModule,
    ],
    templateUrl: './imprint.component.html',
    styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  languageService = inject(LanguageService);
  private readonly firestore = inject(Firestore);
  readonly legalContent$: Observable<LegalContent> = docData(
    doc(this.firestore, 'siteContent', 'legal')
  ) as Observable<LegalContent>;
}
