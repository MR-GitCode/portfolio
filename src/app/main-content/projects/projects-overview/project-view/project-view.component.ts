import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';
import { ContactButtonComponent } from '../../../../shared/contact-button/contact-button.component';
import { StickerCircleComponent } from '../../../../shared/sticker-circle/sticker-circle.component';
import { Project } from '../../../../interfaces/projects-overview-content.interface';
import { Router } from '@angular/router';

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
  @Input({ required: true }) project!: Project;
  readonly languageService = inject(LanguageService);
  private router = inject(Router);

  openProjectDetails(projectId: string): void{
    console.log('🚀 Navigating to:', projectId);
    this.router.navigate(['/projects', projectId]).then(success => {
      console.log('✅ Navigation success:', success);
    }).catch(error => {
      console.error('❌ Navigation error:', error);
    });
  }
}
