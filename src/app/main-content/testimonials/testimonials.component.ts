import { Component, inject } from '@angular/core';
import { collection, collectionData, doc, docData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Testimonial } from '../../interfaces/testimonials.interface';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { TestimonialsContent } from '../../interfaces/testimonials-content.interface';
import { LanguageService } from '../../services/language.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [
        FeedbackComponent,
        NgFor,
        AsyncPipe,
        CommonModule,
        AnimateOnScrollDirective,
    ],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  languageService = inject(LanguageService);
  private readonly firestore = inject(Firestore);
  readonly testimonials$: Observable<Testimonial[]> = collectionData(
    query(collection(this.firestore, 'testimonials'), orderBy('order'))
  ) as Observable<Testimonial[]>;

  
  readonly testimonialsContent$: Observable<TestimonialsContent> = docData(
    doc(this.firestore, 'siteContent', 'testimonials')
  ) as Observable<TestimonialsContent>;
}
