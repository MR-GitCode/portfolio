import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-contact-button',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
    ],
    templateUrl: './contact-button.component.html',
    styleUrl: './contact-button.component.scss'
})

export class ContactButtonComponent {
  @Input() textBtn: string = '';
  @Input() urlBtn: string = '';
  @Input() class = '';
  @Input() disabled = false;
  @Input() routerLink?: any[];

  get isExternalLink(): boolean {
    return this.urlBtn.startsWith('http://') || this.urlBtn.startsWith('https://');
  }

  get isInternalFragment(): boolean {
    return !!this.urlBtn && !this.isExternalLink;
  }

  get isRouterLink(): boolean {
    return !!this.routerLink;
  }
}
