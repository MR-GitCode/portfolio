import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { RouterOutlet } from '@angular/router';
import { MouseAnimationDirective } from './shared/directives/mouse-animation.directive';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
    RouterOutlet,
    HeaderComponent,
    MouseAnimationDirective
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
