import { Directive, ElementRef, HostListener, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseAnimation]',
})

export class MouseAnimationDirective implements OnInit, OnDestroy {
  private cursorDot!: HTMLElement;
  private cursorOutline!: HTMLElement;
  private mouseX = 0;
  private mouseY = 0;
  private outlineX = 0;
  private outlineY = 0;
  private animationId: number | null = null;
  private isTouchDevice = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  /**
   * Starts the mouse animation if no touch device
   */
  ngOnInit() {
    this.isTouchDevice = this.checkIfTouchDevice();

    if(!this.isTouchDevice) {
      this.createCursorElements();
      this.startAnimation();
      this.setupHoverListeners();
    }
  }

  /**
   * Checks if device is a touch device.
   * @returns 
   */
  private checkIfTouchDevice(): boolean {
    return (
      ('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0)
    );
  }

  /**
   * Creates and styles the cursor dot and outline elements
   * and appends them to the document body.
   */
  private createCursorElements() {
    this.cursorDotStyle();
    this.cursorOutlineStyle();
    
    this.renderer.appendChild(document.body, this.cursorDot);
    this.renderer.appendChild(document.body, this.cursorOutline);
  }

  /**
   * Create and styled the outline of cursor.
   */
  private cursorOutlineStyle() {
    this.cursorOutline = this.renderer.createElement('div');
    this.renderer.setStyle(this.cursorOutline, 'width', '40px');
    this.renderer.setStyle(this.cursorOutline, 'height', '40px');
    this.renderer.setStyle(this.cursorOutline, 'border', '2px solid rgba(51, 85, 255, 0.8)');
    this.renderer.setStyle(this.cursorOutline, 'border-radius', '50%');
    this.renderer.setStyle(this.cursorOutline, 'position', 'fixed');
    this.renderer.setStyle(this.cursorOutline, 'pointer-events', 'none');
    this.renderer.setStyle(this.cursorOutline, 'z-index', '9998');
    this.renderer.setStyle(this.cursorOutline, 'transform', 'translate(-50%, -50%)');
    this.renderer.setStyle(this.cursorOutline, 'transition', 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease');
  }

  /**
   * Create and styled the dot of cursor.
   */
  private cursorDotStyle() {
    this.cursorDot = this.renderer.createElement('div');
    this.renderer.setStyle(this.cursorDot, 'width', '8px');
    this.renderer.setStyle(this.cursorDot, 'height', '8px');
    this.renderer.setStyle(this.cursorDot, 'background-color', '#3355FF');
    this.renderer.setStyle(this.cursorDot, 'border-radius', '50%');
    this.renderer.setStyle(this.cursorDot, 'position', 'fixed');
    this.renderer.setStyle(this.cursorDot, 'pointer-events', 'none');
    this.renderer.setStyle(this.cursorDot, 'z-index', '9999');
    this.renderer.setStyle(this.cursorDot, 'transform', 'translate(-50%, -50%)');
    this.renderer.setStyle(this.cursorDot, 'transition', 'transform 0.2s ease, background-color 0.2s ease');
  }

  /**
   * Registers global hover listeners to detect interactions
   */
  private setupHoverListeners() {
    this.mouseOverHoverListener();
    this.mouseOutHoverElement();
  }

  /**
   * Add hover listener for mouseover to targets.
   */
  private mouseOverHoverListener() {
    this.renderer.listen('document', 'mouseover', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Definition of the elements selected as targets here: a, button, .hover-target
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('.hover-target')) {
        this.onHoverStart();
      }
    });
  }

  /**
   * Add hover listener for mouseout to targets.
   */
  private mouseOutHoverElement() {
    this.renderer.listen('document', 'mouseout', (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('.hover-target')) {
        this.onHoverEnd();
      }
    });
  }

  /**
   * Add style of target if hover starts.
   */
  private onHoverStart() {
    this.renderer.setStyle(this.cursorDot, 'transform', 'translate(-50%, -50%) scale(1.5)');
    this.renderer.setStyle(this.cursorDot, 'background-color', '#ffd90000');
    this.renderer.setStyle(this.cursorOutline, 'width', '60px');
    this.renderer.setStyle(this.cursorOutline, 'height', '60px');
    this.renderer.setStyle(this.cursorOutline, 'border-color', 'rgba(255, 215, 0, 0.6)');
  }

  /**
   * Add style of target of hover end.
   */
  private onHoverEnd() {
    this.renderer.setStyle(this.cursorDot, 'transform', 'translate(-50%, -50%) scale(1)');
    this.renderer.setStyle(this.cursorDot, 'background-color', '#3355FF');
    this.renderer.setStyle(this.cursorOutline, 'width', '40px');
    this.renderer.setStyle(this.cursorOutline, 'height', '40px');
    this.renderer.setStyle(this.cursorOutline, 'border-color', 'rgba(51, 85, 255, 0.8)');
  }

  /**
   * Updates the cursor dot position on mouse movement.
   * @param e Mouse move event
   */
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    this.cursorDot.style.left = this.mouseX + 'px';
    this.cursorDot.style.top = this.mouseY + 'px';
  }

  /**
   * Starts the animation loop that smoothly moves
   * the cursor outline toward the mouse position.
   */
  private startAnimation() {
    const animate = () => {
      this.outlineX += (this.mouseX - this.outlineX) * 0.15;
      this.outlineY += (this.mouseY - this.outlineY) * 0.15;
      
      this.cursorOutline.style.left = this.outlineX + 'px';
      this.cursorOutline.style.top = this.outlineY + 'px';
      
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  /**
   * Angular lifecycle hook that stops the animation
   * and removes all cursor elements from the DOM.
   */
  ngOnDestroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.cursorDot?.remove();
    this.cursorOutline?.remove();
  }
}