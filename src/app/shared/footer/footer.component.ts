import { Component } from '@angular/core';
import { FooterLinksComponent } from './footer-links/footer-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    FooterLinksComponent, 
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
