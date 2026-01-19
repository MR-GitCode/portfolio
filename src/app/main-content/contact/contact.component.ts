import { Component, inject } from '@angular/core';
import { FormComponent } from './form/form.component';
import { LanguageService } from '../../services/language.service';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { ContactContent } from '../../interfaces/contact-content.interface';
import { Observable } from 'rxjs';

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
  private readonly firestore = inject(Firestore);

  contentService = inject(FirestoreContentService);
  contactContent = this.contentService.getContactContent();
}
