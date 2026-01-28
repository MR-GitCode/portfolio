import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-contact-button',
    standalone: true,
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

  @Input() disabled = false;

  get hasUrl(): boolean {
    return !!this.urlBtn;
  }
}
