import { Directive, ElementRef, HostListener, Renderer, Input } from "@angular/core";

@Directive({
    selector: '[apDarkerOnHover]'
})

export class DarkerOnHoverDirective {

    @Input() brightness = '70%';

    constructor (
        private element: ElementRef,
        private render: Renderer
    ) {}

    @HostListener('mouseover')
    darkerOn () {
        this.render.setElementStyle(this.element.nativeElement, 'filter', `brightness(${this.brightness})`);
    }
    @HostListener('mouseleave')
    darkerOff () {
        this.render.setElementStyle(this.element.nativeElement, 'filter', 'brightness(100%)');
    }
}