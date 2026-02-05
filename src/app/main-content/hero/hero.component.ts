import { Component, inject } from '@angular/core';
import { HeroSocialsComponent } from './hero-socials/hero-socials.component';
import { HeroTitleComponent } from './hero-title/hero-title.component';
import { ContactButtonComponent } from '../../shared/contact-button/contact-button.component';
import { IconRollDirective } from "../../shared/directives/icon-roll.directive";
import { LanguageService } from '../../services/language.service';
import { FirestoreContentService } from '../../services/firestore-content.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [
    HeroSocialsComponent,
    HeroTitleComponent,
    ContactButtonComponent,
    IconRollDirective
],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
  languageService = inject(LanguageService);
  contentService = inject(FirestoreContentService);
  heroContent = this.contentService.getHeroContent();
}
