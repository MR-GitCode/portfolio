import { Component, inject } from '@angular/core';
import { IconRollDirective } from '../../directives/icon-roll.directive';
import { Router, RouterLink } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { FirestoreContentService } from '../../services/firestore-content.service';

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
    languageService = inject(LanguageService);
    contentService = inject(FirestoreContentService);
    legalContent = this.contentService.getLegalContent();

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
