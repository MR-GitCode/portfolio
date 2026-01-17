import { Component, inject } from '@angular/core';
import { HeroSocialsComponent } from './hero-socials/hero-socials.component';
import { HeroTitleComponent } from './hero-title/hero-title.component';
import { ContactButtonComponent } from '../../shared/contact-button/contact-button.component';
import { IconRollDirective } from "../../shared/directives/icon-roll.directive";
import { LanguageService } from '../../services/language.service';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { HeroContent } from '../../interfaces/hero-content.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero',
    imports: [
        CommonModule,
        HeroSocialsComponent,
        HeroTitleComponent,
        ContactButtonComponent,
        IconRollDirective,
    ],
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
  languageService = inject(LanguageService);
  private readonly firestore = inject(Firestore);

  readonly heroContent$: Observable<HeroContent> = docData(
    doc(this.firestore, 'siteContent', 'hero')
  ) as Observable<HeroContent>;
}
