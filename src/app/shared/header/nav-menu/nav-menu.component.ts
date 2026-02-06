import { Component, inject } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ToggleLanguageComponent } from '../toggle-language/toggle-language.component';
import { HeroSocialsComponent } from '../../../main-content/hero/hero-socials/hero-socials.component';
import { NavMenuService } from '../../services/nav-menu.service';

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
  navMenuService = inject(NavMenuService) 
}