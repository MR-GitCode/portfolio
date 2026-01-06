import { Component, inject } from '@angular/core';
import { ProjectViewComponent } from './project-view/project-view.component';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { collection, collectionData, doc, docData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { LanguageService } from '../../../services/language.service';
import { Project } from '../../../interfaces/project.interface';
import { ProjectsOverviewContent } from '../../../interfaces/projects-overview-content.interface';

@Component({
  selector: 'app-projects-overview',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    ProjectViewComponent,
    CommonModule,
  ],
  templateUrl: './projects-overview.component.html',
  styleUrl: './projects-overview.component.scss'
})
export class ProjectsOverviewComponent {
  private readonly firestore = inject(Firestore);
  languageService = inject(LanguageService);
  readonly projects$: Observable<Project[]> = collectionData(
    query(collection(this.firestore, 'projects'), orderBy('order'))
  ) as Observable<Project[]>;

  readonly projectsContent$: Observable<ProjectsOverviewContent> = docData(
    doc(this.firestore, 'siteContent', 'projects')
  ) as Observable<ProjectsOverviewContent>;
}