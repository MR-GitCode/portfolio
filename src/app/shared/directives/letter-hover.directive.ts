import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";

@Directive({
  selector: '[appLetterHover]',
  standalone: true,
})
export class LetterHoverDirective implements AfterViewInit, OnChanges {
    @Input('appLetterHover') text: string = '';
    private ready = false;
    
    constructor(private el: ElementRef<HTMLElement>) {}

    ngAfterViewInit(): void {
        this.ready = true;
        this.renderSpans();
    }

    ngOnChanges(_: SimpleChanges): void {
        if (this.ready) this.renderSpans();
    }

    private renderSpans() {
        const element = this.el.nativeElement;
        const text = String(this.text ?? '');

        element.innerHTML = [...text].map(letter => `<span>${letter}</span>`).join('');

        this.letterHoverEffect(element);
    }

    private letterHoverEffect(element: HTMLElement) {
        const spans = Array.from(element.querySelectorAll('span')) as HTMLElement[];

        spans.forEach(span => {
            const original = span.textContent ?? '';
            // save original letter
            span.setAttribute('data-original', original);
        
            span.addEventListener('mouseenter', () => {
                const orig = span.getAttribute('data-original') ?? '';
                const isUpper = orig === orig.toUpperCase();
                span.textContent = isUpper ? orig.toLowerCase() : orig.toUpperCase();
                span.classList.add('letter-hovered');
            });

            span.addEventListener('mouseleave', () => {
                const orig = span.getAttribute('data-original') ?? '';
                span.textContent = orig;
                span.classList.remove('letter-hovered');
            });
        })
    }
}