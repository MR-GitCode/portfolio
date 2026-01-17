import { Component } from '@angular/core';
import { IconRollDirective } from '../../directives/icon-roll.directive';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer-links',
    imports: [
        RouterLink,
        IconRollDirective,
    ],
    templateUrl: './footer-links.component.html',
    styleUrl: './footer-links.component.scss'
})
export class FooterLinksComponent {
}
