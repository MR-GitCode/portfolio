import { Component, Input, ViewEncapsulation } from '@angular/core';
import { LetterHoverDirective } from '../../../shared/directives/letter-hover.directive';

@Component({
  selector: 'app-hero-title',
  standalone: true,
  // encapsulation: ViewEncapsulation.None, 
  imports: [
     LetterHoverDirective,
  ],
  templateUrl: './hero-title.component.html',
  styleUrl: './hero-title.component.scss'
})
export class HeroTitleComponent {
  @Input() textTitle1: string = '';
  @Input() textTitle2: string = '';
}
