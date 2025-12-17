import { Component } from '@angular/core';
import { ProjectViewComponent } from './project-view/project-view.component';

@Component({
  selector: 'app-projects-overview',
  standalone: true,
  imports: [
    ProjectViewComponent,
  ],
  templateUrl: './projects-overview.component.html',
  styleUrl: './projects-overview.component.scss'
})
export class ProjectsOverviewComponent {

}
