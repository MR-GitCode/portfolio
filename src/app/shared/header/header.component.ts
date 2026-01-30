import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { ToggleLanguageComponent } from './toggle-language/toggle-language.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        NavComponent,
        NavMenuComponent,
        ToggleLanguageComponent,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    openNavMenu(){

    }
}
