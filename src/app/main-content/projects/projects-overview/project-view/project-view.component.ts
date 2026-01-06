import { Component, inject, Input } from '@angular/core';
import { Project } from '../../../../interfaces/project.interface';
import { LanguageService } from '../../../../services/language.service';
import { Router } from '@angular/router';
import { ContactButtonComponent } from '../../../../shared/contact-button/contact-button.component';

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
  languageService = inject(LanguageService);

  constructor(private router: Router) {}

  openProjectDetails(id: string) {
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/projects', id])
    );

    window.open(url, '_blank');
  }
}
