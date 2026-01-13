import { Component } from '@angular/core';
import { SkillIconComponent } from '../skill-icon/skill-icon.component';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-sticker',
  standalone: true,
  imports: [
    // AsyncPipe,
    // NgFor,
    // SkillIconComponent,
  ],
  templateUrl: './sticker.component.html',
  styleUrl: './sticker.component.scss'
})
export class StickerComponent {
state: 'default' | 'peeling' | 'peeled' | 'unpeeling' = 'default';
private peelTimer?: number;

togglePeel() {
  if (this.state === 'peeling' || this.state === 'unpeeling') return;

  window.clearTimeout(this.peelTimer);

  if (this.state === 'default') {
    this.state = 'peeling';
    this.peelTimer = window.setTimeout(() => this.state = 'peeled', 600);
  } else if (this.state === 'peeled') {
    this.state = 'unpeeling';
    this.peelTimer = window.setTimeout(() => this.state = 'default', 600);
  }
}
}
