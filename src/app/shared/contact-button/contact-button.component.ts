import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-contact-button',
    imports: [
        CommonModule,
    ],
    templateUrl: './contact-button.component.html',
    styleUrl: './contact-button.component.scss'
})
export class ContactButtonComponent {
  @Input() textBtn: string = '';

  @Input() urlBtn: string = '';

  @Input() class = '';

  
}
