import { AfterViewInit, Component, NgZone } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MouseAnimationDirective } from './shared/directives/mouse-animation.directive';
import { filter } from 'rxjs';

declare var AOS: any;

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

export class AppComponent implements AfterViewInit {
    title = 'portfolio';

    constructor(private router: Router) {}

    ngAfterViewInit() {
        if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 80
        });
        }
    }

    ngOnInit() {
        this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
            setTimeout(() => {
            if (typeof AOS !== 'undefined') {
                AOS.refreshHard();
            }
            }, 150);
        });
    }
}
