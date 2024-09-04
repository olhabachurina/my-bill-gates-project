import { Directive, HostListener, Input, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[bold]',
  standalone: true
})
export class BoldDirective implements OnInit {

  @Input() selectedSize = "18px";
  @Input() defaultSize = "16px";

  private fontSize: string = '';
  private fontWeight = "normal";

  ngOnInit() {
    this.fontSize = this.defaultSize;
  }

  constructor() {}

  @HostBinding('style.fontSize') get getFontSize() {
    return this.fontSize;
  }

  @HostBinding('style.fontWeight') get getFontWeight() {
    return this.fontWeight;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.fontSize = this.selectedSize;
    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.fontSize = this.defaultSize;
    this.fontWeight = 'normal';
  }
}