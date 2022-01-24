import { Directive,  HostListener, Input, ElementRef, OnChanges, SimpleChanges  } from '@angular/core';

@Directive({
  selector: '[appBoxStyle]'
})
export class BoxStyleDirective implements OnChanges {

  @Input('appBoxStyle') borderColor:string = 'green'

  @Input() defaultColor:string = 'lightblue'

  constructor(private elemRef: ElementRef) {

    // this.elemRef.nativeElement.style.boxShadow = `3px 3px 3px 3px ${this.borderColor}`

   }

// To Show borderColor from productComp file at beggning Using function ngOnChanges from componentsLife Cycle
   ngOnChanges():void 
   {
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
