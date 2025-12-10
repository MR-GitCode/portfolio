import { Component } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { ToggleLanguageComponent } from './toggle-language/toggle-language.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavComponent,
    ToggleLanguageComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
