import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { Router} from '@angular/router';
import { FirestoreContentService } from '../../../services/firestore-content.service';
import { ViewportScroller } from '@angular/common';
import { NavMenuService } from '../../../services/nav-menu.service';

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss'
})
export class NavComponent {
    languageService = inject(LanguageService);
    navMenuService = inject(NavMenuService);
    contentService = inject(FirestoreContentService);

    navContent = this.contentService.getNavContent();
    private router = inject(Router);
    private viewportScroller = inject(ViewportScroller);

    navigateToSection(section: string): void{
        this.navMenuService.closeNavMenu();
        this.router.navigate(['/'], { fragment: section }).then(() => {
            setTimeout(() => {
                this.viewportScroller.scrollToAnchor(section);
            }, 100);
        });
    }
}
