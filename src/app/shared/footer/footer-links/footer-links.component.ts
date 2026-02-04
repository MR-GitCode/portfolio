import { Component, inject } from '@angular/core';
import { IconRollDirective } from '../../directives/icon-roll.directive';
import { Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
    selector: 'app-footer-links',
    standalone: true,
    imports: [
        RouterLink,
        IconRollDirective,
    ],
    templateUrl: './footer-links.component.html',
    styleUrl: './footer-links.component.scss'
})
export class FooterLinksComponent {
    private router = inject(Router);
    private viewportScroller = inject(ViewportScroller);

    /**
     * Navigate to section contact
     */
    navigateToContact(){
        this.router.navigate(['/'], { fragment: 'contact' }).then(() => {
            setTimeout(() => {
                this.viewportScroller.scrollToAnchor('contact');
            }, 500);
        });
    }
}
