import { Component, inject } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { LanguageService } from '../../../services/language.service';
import { NavContent } from '../../../interfaces/nav-content.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FirestoreDataConverter, DocumentData } from 'firebase/firestore';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
    ],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {
  languageService = inject(LanguageService);
  private readonly firestore = inject(Firestore);

  navConverter: FirestoreDataConverter<NavContent> = {
    toFirestore: (data: NavContent) => data as unknown as DocumentData,
    fromFirestore: (snap) => snap.data() as NavContent,
  };

  readonly navContent$: Observable<NavContent> = docData(
    doc(this.firestore, 'siteContent', 'nav').withConverter(this.navConverter)
  );
}
