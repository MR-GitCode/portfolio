import { Component, inject } from '@angular/core';
import { AboutTagComponent } from './about-tag/about-tag.component';
import { ContactButtonComponent } from "../shared/contact-button/contact-button.component";
import { LanguageService } from '../services/language.service';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { AboutContent } from '../interfaces/about-content.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    AboutTagComponent,
    ContactButtonComponent,
    CommonModule,
],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  languageService = inject(LanguageService);
  private readonly firestore = inject(Firestore);

  readonly aboutContent$: Observable<AboutContent> = docData(
    doc(this.firestore, 'siteContent', 'about')
  ) as Observable<AboutContent>;
}
