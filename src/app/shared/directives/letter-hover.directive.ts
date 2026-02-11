import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[appLetterHover]',
  standalone: true,
})
export class LetterHoverDirective implements AfterViewInit, OnChanges {
    @Input('appLetterHover') text: string = '';
    private ready = false;
    
    constructor(private el: ElementRef<HTMLElement>) {}

    /**
     * Angular lifecycle hook that runs after the view is initialized.
     * Marks the directive as ready and renders the letter spans.
     */
    ngAfterViewInit(): void {
        this.ready = true;
        this.renderSpans();
    }

    /**
     * Angular lifecycle hook that reacts to input changes.
     * Re-renders the spans once the view is ready.
     * @param _ Object containing changed input properties
     */
    ngOnChanges(_: SimpleChanges): void {
        if (this.ready) this.renderSpans();
    }

    /**
     * Splits the input text into individual span elements
     * and attaches the hover effect to each letter.
     */
    private renderSpans() {
        const element = this.el.nativeElement;
        const text = String(this.text ?? '');

        element.innerHTML = [...text].map((letter, index) => {
            const delay = index * 150; // 150ms pro letter
            return `<span data-aos="fade-right" data-aos-delay="${delay}">${letter}</span>`;
        }).join('');
        this.letterHoverEffect(element);
    }

    /**
     * Applies hover behavior to all letter spans
     * within the host element.
     * @param element Host element containing letter spans
     */
    private letterHoverEffect(element: HTMLElement) {
        const spans = Array.from(element.querySelectorAll('span')) as HTMLElement[];

        spans.forEach(span => {
            this.storeOriginalLetter(span);
            this.adHoverListener(span);
        })
    }

    /**
     * Stores the original letter value on the span element
     * to allow restoring it on mouse leave.
     * @param span Span element representing a single letter
     */
    private storeOriginalLetter(span: HTMLElement) {
        const original = span.textContent ?? '';
        span.setAttribute('data-original', original);
    }

    /**
     * Registers mouse enter and leave listeners
     * for the given letter span.
     * @param span Span element representing a single letter
     */
    private adHoverListener(span: HTMLElement) {
        span.addEventListener('mouseenter', () => this.onLetterEnter(span));
        span.addEventListener('mouseleave', () => this.onLetterLeave(span));
    }

    /**
     * Handles the mouse enter event by toggling
     * the letter case and adding a hover CSS class.
     * @param span Span element being hovered
     */
    private onLetterEnter(span: HTMLElement): void {
        const orig = span.getAttribute('data-original') ?? '';
        const isUpper = orig === orig.toUpperCase();

        span.textContent = isUpper ? orig.toLowerCase() : orig.toUpperCase();
        span.classList.add('letter-hovered');
    }

    /**
     * Handles the mouse leave event by restoring
     * the original letter and removing the hover CSS class.
     * @param span Span element that is no longer hovered
     */
    private onLetterLeave(span: HTMLElement): void {
        const orig = span.getAttribute('data-original') ?? '';
        span.textContent = orig;
        span.classList.remove('letter-hovered');
    }
}