import { Component, inject } from '@angular/core';
import { ProjectViewComponent } from './project-view/project-view.component';
import { LanguageService } from '../../../services/language.service';
import { AnimateOnScrollDirective } from '../../../shared/directives/animate-on-scroll.directive';
import { FirestoreContentService } from '../../../services/firestore-content.service';

@Component({
    selector: 'app-projects-overview',
    standalone: true,
    imports: [
        ProjectViewComponent,
        AnimateOnScrollDirective,
    ],
    templateUrl: './projects-overview.component.html',
    styleUrl: './projects-overview.component.scss'
})
export class ProjectsOverviewComponent {
  languageService = inject(LanguageService);
  contentService = inject(FirestoreContentService);
    
  projects = this.contentService.getProjects();
  projectsContent = this.contentService.getProjectsContent();
}