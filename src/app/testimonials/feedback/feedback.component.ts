import { Component, Input } from '@angular/core';
import { Testimonial } from '../../interfaces/testimonials.interface';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  @Input() testimonial! : Testimonial;
}
