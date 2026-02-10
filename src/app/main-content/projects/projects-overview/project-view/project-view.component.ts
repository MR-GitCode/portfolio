import { Component, inject, Input } from '@angular/core';
import { LanguageService } from '../../../../shared/services/language.service';
import { ContactButtonComponent } from '../../../../shared/contact-button/contact-button.component';
import { StickerCircleComponent } from '../../../../shared/sticker-circle/sticker-circle.component';
import { Project } from '../../../../interfaces/projects-overview-content.interface';
import { RouterLink } from '@angular/router';
import { ImageBounceDirective } from '../../../../shared/directives/image-bounce.directive';

@Component({
    selector: 'app-project-view',
    standalone: true,
    imports: [
      ContactButtonComponent,
      StickerCircleComponent,
      ImageBounceDirective,
      RouterLink
  ],
    templateUrl: './project-view.component.html',
    styleUrl: './project-view.component.scss'
})
export class ProjectViewComponent {
  @Input({ required: true }) project!: Project;
  readonly languageService = inject(LanguageService);
}
