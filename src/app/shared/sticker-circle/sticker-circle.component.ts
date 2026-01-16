import { Component, Input} from '@angular/core';

type StickerKey = 'orange' | 'blue' | 'yellow';
type centerImgKey = 'logo' | 'arrow';
type StickerVariant = 'feature' | 'logo';

@Component({
  selector: 'app-sticker-circle',
  standalone: true,
  imports: [],
  templateUrl: './sticker-circle.component.html',
  styleUrl: './sticker-circle.component.scss'
})
export class StickerCircleComponent {
  @Input() variant: StickerVariant = 'logo';
  @Input() stickerColor: StickerKey = 'orange';
  @Input() imgWidth = 54;
  @Input() imgHeight = 56;

  //Input for text
  @Input() topText = '';
  @Input() bottomText = '';

  // // Position on circle
  @Input() topOffset: string = '50%';
  @Input() bottomOffset: string = '50%';

  readonly variantConfig: Record<StickerVariant, {
    textFontSize: number;
    textLetterSpacing: number;
    bottomUpsideDown: boolean;
    ringSize: number;
    ringRadius: number;
    textFill: string;
    centerImg: centerImgKey;
    topTextOffset: number;
    bottomTextOffset: number;
  }> = {
    logo: {
      textFontSize: 16,
      textLetterSpacing: 1.6,
      bottomUpsideDown: true,
      ringSize: 300,
      ringRadius: 110,
      textFill: '#0E1013',
      centerImg: 'logo',
      topTextOffset: 0,
      bottomTextOffset: 0,
    },
    feature: {
      textFontSize: 30,
      textLetterSpacing: 1,
      bottomUpsideDown: false,
      ringSize: 300,
      ringRadius: 95,
      textFill: '#F8F9FA',
      centerImg: 'arrow',
      topTextOffset: 4,
      bottomTextOffset: 15,
    },
  };

  readonly stickerSrc: Record<StickerKey, string> = {
    orange: '/assets/img/03_stickers/00_Round/01_Color_option_1_Orange.png',
    blue:   '/assets/img/03_stickers/00_Round/00_Color_option_1_Blue.png',
    yellow: '/assets/img/03_stickers/00_Round/02_Color_option_1_Yellow.png',
  };

  readonly centerSrc: Record<centerImgKey, string> = {
    logo: '/assets/img/00_hand-drawn-lines/00_Header/logo_mr_black.svg',
    arrow: '/assets/img/03_stickers/00_Round/Sticker_arrow_weiß.png',
  };
         
  get config() {
  return this.variantConfig[this.variant];
}

  get imgSrc(): string {
    return this.stickerSrc[this.stickerColor];
  }

  get centerImgSrc(): string {
    return this.centerSrc[this.config.centerImg];
  }

  readonly uid = Math.random().toString(36).slice(2);
  get topId() { return `topArc-${this.uid}`; }
  get bottomId() { return `bottomArc-${this.uid}`; }

  get cx() { return this.config.ringSize / 2; }
  get cy() { return this.config.ringSize / 2; }
  
  get topTextRadius() {
    return this.config.ringRadius + this.config.topTextOffset;
  }

  get bottomTextRadius() {
    return this.config.ringRadius + this.config.bottomTextOffset;
  }

  // top half circle (uses topTextRadius)
  get topArcD(): string {
    const r = this.topTextRadius;
    return `M ${this.cx - r},${this.cy} A ${r},${r} 0 0 1 ${this.cx + r},${this.cy}`;
  }

  // bottom half circle readable (uses bottomTextRadius)
  get bottomArcD(): string {
    const r = this.bottomTextRadius;
    return `M ${this.cx - r},${this.cy} A ${r},${r} 0 0 0 ${this.cx + r},${this.cy}`;
  }

  // bottom half circle turned (still bottom half, but direction reversed)
  get bottomArcFlippedD(): string {
    const r = this.bottomTextRadius;
    return `M ${this.cx + r},${this.cy} A ${r},${r} 0 0 1 ${this.cx - r},${this.cy}`;
  }
}
