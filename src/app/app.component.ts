import { Component } from '@angular/core';
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

export class AppComponent {
    title = 'portfolio';

    constructor(private router: Router) {}

    ngOnInit() {
        this.initAOSWhenReady();

        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                setTimeout(() => {
                    this.initAOS();
                }, 300);
            });
    }

    private initAOSWhenReady(attempts = 0) {
        // Maximal 50 Versuche (= 5 Sekunden)
        if (attempts > 50) {
            console.error('AOS failed to load');
            return;
        }

        if (typeof AOS === 'undefined') {
            setTimeout(() => this.initAOSWhenReady(attempts + 1), 100);
            return;
        }

        this.initAOS();
    }

    private initAOS() {
        if (typeof AOS === 'undefined') return;

        if (document.readyState === "complete") {
            AOS.init({
                duration: 1000,
                once: true,
                offset: 120,
                delay: 0
            });
            AOS.refresh();
        } else {
            document.onreadystatechange = () => {
                if (document.readyState === "complete" && typeof AOS !== 'undefined') {
                    AOS.init({
                        duration: 1000,
                        once: true,
                        offset: 120,
                        delay: 0
                    });
                }
            };
        }
    }
}
