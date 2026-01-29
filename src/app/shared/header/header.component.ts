import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { ToggleLanguageComponent } from './toggle-language/toggle-language.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        NavComponent,
        NavMenuComponent,
        ToggleLanguageComponent,
        MatButtonModule,
        MatMenuModule,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {  
}
