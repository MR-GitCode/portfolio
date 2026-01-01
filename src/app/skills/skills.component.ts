import { Component, inject } from '@angular/core';
import { SkillIconComponent } from './skill-icon/skill-icon.component';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Skill } from '../interfaces/skill.interface';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    SkillIconComponent,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  private readonly firestore = inject(Firestore);
  readonly skills$: Observable<Skill[]> = collectionData(
    collection(this.firestore, 'skills'),
    { idField: 'id' }
  ) as Observable<Skill[]>;
}
  