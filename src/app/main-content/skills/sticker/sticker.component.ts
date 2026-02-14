import { Component, computed, inject } from '@angular/core';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { FirestoreContentService } from '../../../shared/services/firestore-content.service';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
    selector: 'app-sticker',
    standalone: true,
    imports: [
      SkillIconComponent,
    ],
    templateUrl: './sticker.component.html',
    styleUrl: './sticker.component.scss'
})
export class StickerComponent {
  state: 'default' | 'peeling' | 'peeled' | 'unpeeling' = 'default';
  private peelTimer?: number;
  contentService = inject(FirestoreContentService);
  skills = this.contentService.getSkills();
  languageService = inject(LanguageService);
  skillContent = this.contentService.getSkillContent();
  interestSkills = computed(() =>
    this.skills().filter(skill => skill.type === 'interest')
  );
  
  /**
   * Toggles the peel animation state.
   * @returns 
   */
  togglePeel() {
    if (this.state === 'peeling' || this.state === 'unpeeling') return;

    window.clearTimeout(this.peelTimer);

    if (this.state === 'default') {
      this.state = 'peeling';
      this.peelTimer = window.setTimeout(() => this.state = 'peeled', 400);
    } else if (this.state === 'peeled') {
      this.state = 'unpeeling';
      this.peelTimer = window.setTimeout(() => this.state = 'default', 400);
    }
  }

  
}