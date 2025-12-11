import { Component } from '@angular/core';
import { HeroSocialsComponent } from './hero-socials/hero-socials.component';
import { HeroTitleComponent } from './hero-title/hero-title.component';
import { ContactButtonComponent } from '../shared/contact-button/contact-button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    HeroSocialsComponent,
    HeroTitleComponent,
    ContactButtonComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
