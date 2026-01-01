import { Component, inject } from '@angular/core';
import { ProjectViewComponent } from './project-view/project-view.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { Project } from '../interfaces/project.interface';
import { Observable } from 'rxjs';
import { collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';

@Component({
  selector: 'app-projects-overview',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    ProjectViewComponent,
  ],
  templateUrl: './projects-overview.component.html',
  styleUrl: './projects-overview.component.scss'
})
export class ProjectsOverviewComponent {
  private readonly firestore = inject(Firestore);
  readonly projects$: Observable<Project[]> = collectionData(
    query(collection(this.firestore, 'projects'), orderBy('order'))
  ) as Observable<Project[]>;
}
