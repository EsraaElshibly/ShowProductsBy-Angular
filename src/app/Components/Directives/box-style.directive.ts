import { Directive,  HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBoxStyle]'
})
export class BoxStyleDirective {

  @Input('appBoxStyle') borderColor:string = 'lightgray'

  @Input() defaultColor:string = 'lightblue'

  constructor(private elemRef: ElementRef) {

    this.elemRef.nativeElement.style.boxShadow = `3px 3px 3px 3px ${this.borderColor}`

   }

   @HostListener('mouseover') onMouseOver () 
   {
     this.elemRef.nativeElement.style.boxShadow = `4px 4px 4px 4px ${this.defaultColor}`
   }

   @HostListener('mouseout') onMouseOut () 
   {
     this.elemRef.nativeElement.style.boxShadow = `3px 3px 3px 3px ${this.borderColor}`
   }

}
