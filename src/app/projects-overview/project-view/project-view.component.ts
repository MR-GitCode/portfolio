import { Component, Input } from '@angular/core';
import { ContactButtonComponent } from '../../shared/contact-button/contact-button.component';
import { Project } from '../../interfaces/project.interface';

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
  @Input() project!: Project;
}
