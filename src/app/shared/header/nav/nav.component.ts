import { Component, inject } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { LanguageService } from '../../../services/language.service';
import { Observable } from 'rxjs';
import { NavContent } from '../../../interfaces/nav-content.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  languageService = inject(LanguageService);
  private readonly firestore = inject(Firestore);

  readonly navContent$: Observable<NavContent> = docData(
    doc(this.firestore, 'siteContent', 'nav')
  ) as Observable<NavContent>;
}
