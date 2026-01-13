import { Component } from '@angular/core';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-sticker',
  standalone: true,
  imports: [
    AsyncPipe,
    NgFor,
    SkillIconComponent,
  ],
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.scss'
})
export class StickerComponent {

}
