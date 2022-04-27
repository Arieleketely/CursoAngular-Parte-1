import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appLetra]'
})
export class LetraDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color='#000080'
   }

}
