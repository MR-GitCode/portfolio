import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './main-content/projects/project-details/project-details.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalNoticeComponent } from './main-content/legal-notice/legal-notice.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'projects/:id', component: ProjectDetailsComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: '**', redirectTo: '' }     
];