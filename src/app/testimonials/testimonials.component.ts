import { Component } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    FeedbackComponent,
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

}
