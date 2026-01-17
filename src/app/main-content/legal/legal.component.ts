import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
    selector: 'app-legal',
    standalone: true,
    imports: [
        FooterComponent,
        RouterOutlet
    ],
    templateUrl: './legal.component.html',
    styleUrl: './legal.component.scss'
})
export class LegalComponent {

}
