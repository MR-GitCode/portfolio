import { Component, inject } from '@angular/core';
import { SkillIconComponent } from './skill-icon/skill-icon.component';
import { collection, collectionData, doc, docData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { Skills } from '../../interfaces/skills.interface';
import { LanguageService } from '../../services/language.service';
import { SkillContent } from '../../interfaces/skill-content.interface';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    SkillIconComponent,
    CommonModule,
    AnimateOnScrollDirective,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  private readonly firestore = inject(Firestore);
  readonly skills$: Observable<Skills[]> = collectionData(
    query(collection(this.firestore, 'skills'), orderBy('order'))
  ) as Observable<Skills[]>;

    languageService = inject(LanguageService);

  readonly skillContent$: Observable<SkillContent> = docData(
    doc(this.firestore, 'siteContent', 'skill')
  ) as Observable<SkillContent>;
}
  