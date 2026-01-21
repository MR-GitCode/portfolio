import { Routes } from '@angular/router';
import { ProjectDetailsComponent } from './main-content/projects/project-details/project-details.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './main-content/legal/imprint/imprint.component';
import { PrivacyPolicyComponent } from './main-content/legal/privacy-policy/privacy-policy.component';
import { LegalComponent } from './main-content/legal/legal.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent},
    { path: 'projects/:id', component: ProjectDetailsComponent, title: 'Project Details'},
    { path: 'legal', component: LegalComponent,
        children: [
            { path: 'imprint', component: ImprintComponent, title: 'Imprint' },
            { path: 'privacy-policy', component: PrivacyPolicyComponent, title: 'Privacy Policy' },
            { path: '', redirectTo: 'imprint', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '' }     
] as const;