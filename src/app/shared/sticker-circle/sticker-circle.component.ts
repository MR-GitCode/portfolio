import { Component, Input} from '@angular/core';

type StickerKey = 'orange' | 'blue' | 'yellow';
type centerImgKey = 'logo' | 'arrow';

@Component({
  selector: 'app-sticker-circle',
  standalone: true,
  imports: [],
  templateUrl: './sticker-circle.component.html',
  styleUrl: './sticker-circle.component.scss'
})
export class StickerCircleComponent {
  @Input() stickerColor: StickerKey = 'orange';
  @Input() centerImg: centerImgKey = 'logo'
  @Input() imgWidth = 54;
  @Input() imgHeight = 56;

  //Input for text
  @Input() topText = 'Michael Ring - Frontend Developer -';
  @Input() bottomText = 'Check all details -';
  @Input() textFontSize = 16;
  @Input() textLetterSpacing = 1.6;
  @Input() textFill = '#000000';
  // Position on circle
  @Input() topOffset: string = '50%';
  @Input() bottomOffset: string = '50%';
  // turned bottom text
  @Input() bottomUpsideDown = false;
  // Ring-Geometre
  @Input() ringSize = 300;     // viewBox 0 0 300 300
  @Input() ringRadius = 115;   // size of ring

  readonly stickerSrc: Record<StickerKey, string> = {
    orange: '/assets/img/03_stickers/00_Round/01_Color_option_1_Orange.png',
    blue:   '/assets/img/03_stickers/00_Round/00_Color_option_1_Blue.png',
    yellow: '/assets/img/03_stickers/00_Round/02_Color_option_1_Yellow.png',
  };

  readonly centerSrc: Record<centerImgKey, string> = {
    logo: '/assets/img/00_hand-drawn-lines/00_Header/logo_mr_black.svg',
    arrow: '/assets/img/03_stickers/00_Round/Sticker_arrow_weiß.png',
  };
                                       
  get imgSrc(): string {
    return this.stickerSrc[this.stickerColor];
  }

  get centerImgSrc(): string {
    return this.centerSrc[this.centerImg];
  }

  readonly uid = Math.random().toString(36).slice(2);
  get topId() { return `topArc-${this.uid}`; }
  get bottomId() { return `bottomArc-${this.uid}`; }

  
  
  get cx() { return this.ringSize / 2; }
  get cy() { return this.ringSize / 2; }
  get leftX() { return this.cx - this.ringRadius; }
  get rightX() { return this.cx + this.ringRadius; }

  // top half circle
  get topArcD(): string {
    return `M ${this.leftX},${this.cy} A ${this.ringRadius},${this.ringRadius} 0 0 1 ${this.rightX},${this.cy}`;
  }

  // bottom half circle readly
  get bottomArcD(): string {
    return `M ${this.leftX},${this.cy} A ${this.ringRadius},${this.ringRadius} 0 0 0 ${this.rightX},${this.cy}`;
  }

  // bottom half circle turned
  get bottomArcFlippedD(): string {
    return `M ${this.rightX},${this.cy} A ${this.ringRadius},${this.ringRadius} 0 0 1 ${this.leftX},${this.cy}`;
  }
}
