import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ToggleLanguageComponent } from '../toggle-language/toggle-language.component';
import { HeroSocialsComponent } from '../../../main-content/hero/hero-socials/hero-socials.component';

@Component({
  selector: 'app-nav-menu',
  imports: [
    NavComponent,
    ToggleLanguageComponent,
    HeroSocialsComponent,
  ],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {

}
