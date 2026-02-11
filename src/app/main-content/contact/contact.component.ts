import { Component, inject, effect } from '@angular/core';
import { FormComponent } from './form/form.component';
import { LanguageService } from '../../shared/services/language.service';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { StickerCircleComponent } from '../../shared/sticker-circle/sticker-circle.component';
import { FirestoreContentService } from '../../shared/services/firestore-content.service';

declare var AOS: any;

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        FormComponent,
        AnimateOnScrollDirective,
        StickerCircleComponent
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
  languageService = inject(LanguageService);
  contentService = inject(FirestoreContentService);

  contactContent = this.contentService.getContactContent();

  constructor() {
    effect(() => {
      const content = this.contactContent();

      if (content && typeof AOS !== 'undefined') {
        setTimeout(() => {
          AOS.refreshHard();
        }, 100);
      }
    });
  }
}
