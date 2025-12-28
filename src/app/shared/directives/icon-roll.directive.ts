import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appIconRoll]',
  standalone: true,
})
export class IconRollDirective {
  @HostBinding('class.is-hovered') hovered = false;
  @HostBinding('class.is-leaving') leaving = false;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hovered = true;
    this.leaving = false;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
    this.leaving = true;
  }

  @HostListener('animationend', ['$event'])
  onAnimationEnd(event: AnimationEvent) {
    if (event.animationName === 'roll-left') {
      this.leaving = false;
    }
  }
}