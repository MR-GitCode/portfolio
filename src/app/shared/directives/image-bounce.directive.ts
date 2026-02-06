import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appImageBounce]',
  standalone: true
})

export class ImageBounceDirective implements OnInit, OnDestroy {
  @Input() appImageBounce: boolean = false;
  private projectContainer: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.appImageBounce) {
      this.renderer.addClass(this.el.nativeElement, 'bounce-animation');
      
      this.projectContainer = this.el.nativeElement.closest('.project-container');
      
      if (this.projectContainer) {
        this.projectContainer.addEventListener('mouseenter', this.pauseAnimation);
        this.projectContainer.addEventListener('mouseleave', this.resumeAnimation);
      }
    }
  }

  private pauseAnimation = () => {
    this.renderer.setStyle(this.el.nativeElement, 'animation-play-state', 'paused');
  }

  private resumeAnimation = () => {
    this.renderer.setStyle(this.el.nativeElement, 'animation-play-state', 'running');
  }

  ngOnDestroy() {
    if (this.projectContainer) {
      this.projectContainer.removeEventListener('mouseenter', this.pauseAnimation);
      this.projectContainer.removeEventListener('mouseleave', this.resumeAnimation);
    }
    this.renderer.removeClass(this.el.nativeElement, 'bounce-animation');
  }
}