import { Component, inject } from '@angular/core';
import { FooterLinksComponent } from '../../shared/footer/footer-links/footer-links.component';
import { FooterComponent } from "../../shared/footer/footer.component";
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { ImprintContent } from '../../interfaces/imprint-content.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [
    FooterLinksComponent,
    FooterComponent,
    CommonModule,
],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  languageService = inject(LanguageService);
  private readonly firestore = inject(Firestore);
  readonly imprintContent$: Observable<ImprintContent> = docData(
    doc(this.firestore, 'siteContent', 'imprint')
  ) as Observable<ImprintContent>;
}
