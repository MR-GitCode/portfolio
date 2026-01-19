import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';
import { Router } from '@angular/router';
import { ContactButtonComponent } from '../../../../shared/contact-button/contact-button.component';
import { StickerCircleComponent } from '../../../../shared/sticker-circle/sticker-circle.component';

import { Project } from '../../../../interfaces/projects-overview-content.interface';

@Component({
    selector: 'app-project-view',
    standalone: true,
    imports: [
    ContactButtonComponent,
    StickerCircleComponent
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
