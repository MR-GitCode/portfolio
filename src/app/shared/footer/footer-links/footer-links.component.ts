import { Component } from '@angular/core';
import { IconRollDirective } from '../../directives/icon-roll.directive';

@Component({
  selector: 'app-footer-links',
  standalone: true,
  imports: [
    IconRollDirective,
  ],
  templateUrl: './footer-links.component.html',
  styleUrl: './footer-links.component.scss'
})
export class FooterLinksComponent {

}
