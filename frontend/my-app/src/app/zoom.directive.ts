import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomDirective]'
})
export class ZoomDirective  {
  constructor(private element: ElementRef) {

  }

  @HostListener('mouseenter') onMouseEnter(){
    this.zoom(1.02, 'dodgerblue', 'white')
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.zoom(1.0, '','')
  }
  private highlight(color: string) {
  this.element.nativeElement.style.backgroundColor = color;
}

  private zoom(amount: number, color: string, fcolor: string  ){
    this.element.nativeElement.style.transform = `scale(${amount})`;
    this.element.nativeElement.style.backgroundColor = color;
    this.element.nativeElement.style.color = fcolor;
    this.element.nativeElement.style.transition = `1s linear`
  }

}
