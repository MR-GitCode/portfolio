import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { FeedbackComponent } from './feedback/feedback.component';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { FirestoreContentService } from '../../services/firestore-content.service';

@Component({
    selector: 'app-testimonials',
    standalone: true,
    imports: [
        FeedbackComponent,
        CommonModule,
        AnimateOnScrollDirective,
    ],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})

export class TestimonialsComponent {
    languageService = inject(LanguageService);
    contentService = inject(FirestoreContentService);
    testimonials = this.contentService.getTestimonials();
    testimonialsContent = this.contentService.getTestimonialsContent();
}
