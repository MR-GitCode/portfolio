import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-button',
  standalone: true,
  imports: [],
  templateUrl: './contact-button.component.html',
  styleUrl: './contact-button.component.scss'
})
export class ContactButtonComponent {
  @Input() textBtn: string = '';
}
