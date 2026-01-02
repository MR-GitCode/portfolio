import { Component, Input } from '@angular/core';
import { Skills } from '../../interfaces/skills.interface';

@Component({
  selector: 'app-skill-icon',
  standalone: true,
  imports: [
  ],
  templateUrl: './skill-icon.component.html',
  styleUrl: './skill-icon.component.scss'
})
export class SkillIconComponent {
  @Input() skill!: Skills;
}
