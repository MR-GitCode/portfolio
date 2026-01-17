import { Component, inject } from '@angular/core';
import { FormComponent } from './form/form.component';
import { LanguageService } from '../../services/language.service';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { ContactContent } from '../../interfaces/contact-content.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { StickerCircleComponent } from '../../shared/sticker-circle/sticker-circle.component';

@Component({
    selector: 'app-contact',
    imports: [
        FormComponent,
        CommonModule,
        AnimateOnScrollDirective,
        StickerCircleComponent,
    ],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
  languageService = inject(LanguageService);
  private readonly firestore = inject(Firestore);
  readonly contactContent$: Observable<ContactContent> = docData(
    doc(this.firestore, 'siteContent', 'contact')
  ) as Observable<ContactContent>;
}
