import { AfterViewInit, Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[appLetterHover]',
  standalone: true,
})
export class LetterHoverDirective implements AfterViewInit {
    constructor(private el: ElementRef<HTMLElement>) {}

    ngAfterViewInit(): void {
        const element = this.el.nativeElement;           // <h1>
        const text = String(element.textContent ?? '');  // get text

        const spanContainer = [...text]
        .map(letter => `<span>${letter}</span>`)
        .join('');

        element.innerHTML = spanContainer;

        this.letterHoverEffect(element);
    }

    letterHoverEffect(element: HTMLElement) {
        const spans = element.querySelectorAll('span');

        Array.from(spans).forEach((span) => {
            const original = span.textContent ?? '';
            (span as HTMLElement).dataset['original'] = original; //save original letter
        
            span.addEventListener('mouseenter', () => {
                const orig = (span as HTMLElement).dataset['original'] ?? '';
                const isUpper = orig === orig.toUpperCase();
                span.textContent = isUpper ? orig.toLowerCase() : orig.toUpperCase();
                span.classList.add('letter-hovered');
            });

            span.addEventListener('mouseleave', () => {
                const orig = (span as HTMLElement).dataset['original'] ?? '';
                span.textContent = orig;
                span.classList.remove('letter-hovered');
            });
        })
    }
}