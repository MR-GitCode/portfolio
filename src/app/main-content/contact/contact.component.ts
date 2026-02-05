import { Component, inject } from '@angular/core';
import { FormComponent } from './form/form.component';
import { LanguageService } from '../../services/language.service';
import { Firestore } from '@angular/fire/firestore';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { StickerCircleComponent } from '../../shared/sticker-circle/sticker-circle.component';
import { FirestoreContentService } from '../../services/firestore-content.service';

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
  private readonly firestore = inject(Firestore);

  contactContent = this.contentService.getContactContent();
}
