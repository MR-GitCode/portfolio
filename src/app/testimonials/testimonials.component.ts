import { Component, inject } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Testimonial } from '../interfaces/testimonials.interface';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    FeedbackComponent,
    NgFor,
    AsyncPipe,
    CommonModule,
],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  private readonly firestore = inject(Firestore);
  readonly testimonials$: Observable<Testimonial[]> = collectionData(
    query(collection(this.firestore, 'testimonials'), orderBy('order'))
  ) as Observable<Testimonial[]>;
}
