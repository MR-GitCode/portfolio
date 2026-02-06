import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavMenuService } from '../../../shared/services/nav-menu.service';

@Component({
    selector: 'app-hero-socials',
    standalone: true,
    templateUrl: './hero-socials.component.html',
    styleUrl: './hero-socials.component.scss'
})
export class HeroSocialsComponent {
    navMenuService = inject(NavMenuService);
    private viewportScroller = inject(ViewportScroller);

    /**
     * Navigate to section contact
     */
    navigateToContact(){
        this.navMenuService.closeNavMenu();
        this.viewportScroller.scrollToAnchor('contact');
    }
}