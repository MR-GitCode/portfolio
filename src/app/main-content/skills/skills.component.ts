import { Component, inject } from '@angular/core';
import { SkillIconComponent } from './skill-icon/skill-icon.component';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';
import { StickerComponent } from './sticker/sticker.component';
import { FirestoreContentService } from '../../services/firestore-content.service';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [
        SkillIconComponent,
        AnimateOnScrollDirective,
        StickerComponent,
    ],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  languageService = inject(LanguageService);
  contentService = inject(FirestoreContentService);
  
  skills = this.contentService.getSkills();
  skillContent = this.contentService.getSkillContent();
}
  