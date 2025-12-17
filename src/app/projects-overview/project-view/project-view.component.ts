import { Component } from '@angular/core';
import { ContactButtonComponent } from '../../shared/contact-button/contact-button.component';

@Component({
  selector: 'app-project-view',
  standalone: true,
  imports: [
    ContactButtonComponent,
  ],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent {

}
