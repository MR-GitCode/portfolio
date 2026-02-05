import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appIconRoll]',
  standalone: true,
})
export class IconRollDirective {
  @HostBinding('class.is-hovered') hovered = false;
  @HostBinding('class.is-leaving') leaving = false;

  @HostListener('mouseenter')

  /**
   * Shows element if hovered.
   */
  onMouseEnter() {
    this.hovered = true;
    this.leaving = false;
  }

  /**
   * Remove hovered effekt if leaving element. 
   */
  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
    this.leaving = true;
  }

  /**
   * Handles animation end event on the host element.
   * Cleans up leaving state after the roll-left animation completes.
   * @param event The animation event containing animation details.
   */
  @HostListener('animationend', ['$event'])
  onAnimationEnd(event: AnimationEvent) {
    if (event.animationName === 'roll-left') {
      this.leaving = false;
    }
  }
}