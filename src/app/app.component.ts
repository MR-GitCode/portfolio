import { Component, inject } from '@angular/core';

import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
    RouterOutlet,
    HeaderComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
  private readonly router = inject(Router);
  private readonly viewportScroller = inject(ViewportScroller)

}
