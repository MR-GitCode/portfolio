import { Component, inject } from '@angular/core';
import { AboutTagComponent } from './about-tag/about-tag.component';
import { ContactButtonComponent } from "../../shared/contact-button/contact-button.component";
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { FirestoreContentService } from '../../services/firestore-content.service';

@Component({
    selector: 'app-about-me',
    standalone: true,
    imports: [
        AboutTagComponent,
        ContactButtonComponent,
        CommonModule,
        AnimateOnScrollDirective,
    ],
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  languageService = inject(LanguageService);
  contentService = inject(FirestoreContentService);

  aboutContent = this.contentService.getAboutContent();
}