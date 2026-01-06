import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './main-content/projects/project-details/project-details.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'projects/:id', component: ProjectDetailsComponent },
    { path: '**', redirectTo: '' }     
];