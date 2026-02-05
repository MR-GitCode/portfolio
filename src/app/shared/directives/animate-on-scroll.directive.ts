import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit, OnDestroy {
  @Input() enterClass = 'drawline-visible';
  @Input() leaveClass?: string;
  @Input() delay = 0;

  private observer?: IntersectionObserver;

  constructor(private readonly elementRef: ElementRef<HTMLElement>, private readonly renderer: Renderer2) {}

  /**
   * Initializes the IntersectionObserver after view initialization.
   * Shows underline animations of headlines.
   */
  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (this.delay > 0) {
            setTimeout(() => {
              this.renderer.addClass(this.elementRef.nativeElement, this.enterClass);
            }, this.delay);
          } else {
            this.renderer.addClass(this.elementRef.nativeElement, this.enterClass);
          }
        } else {
          this.renderer.removeClass(this.elementRef.nativeElement, this.enterClass);
          if (this.leaveClass) {
            this.renderer.addClass(this.elementRef.nativeElement, this.leaveClass);
          }
        }
      },
      { threshold: 1 } //animation if 100% visible
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  /**
   * Cleanup method that disconnects the IntersectionObserver.
   */
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}