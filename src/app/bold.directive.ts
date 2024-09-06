import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[bold]',
  standalone: true // Делаем директиву автономной
})
export class BoldDirective implements OnInit {
  @Input() selectedSize: string = '60px';
  @Input() defaultSize: string = '55px';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', this.defaultSize);
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');

    this.el.nativeElement.addEventListener('mouseenter', () => {
      this.renderer.setStyle(this.el.nativeElement, 'font-size', this.selectedSize);
    });

    this.el.nativeElement.addEventListener('mouseleave', () => {
      this.renderer.setStyle(this.el.nativeElement, 'font-size', this.defaultSize);
    });
  }
}