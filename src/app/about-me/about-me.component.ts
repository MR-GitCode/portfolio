import { Component } from '@angular/core';
import { AboutTagComponent } from './about-tag/about-tag.component';
import { ContactButtonComponent } from "../shared/contact-button/contact-button.component";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    AboutTagComponent,
    ContactButtonComponent
],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
