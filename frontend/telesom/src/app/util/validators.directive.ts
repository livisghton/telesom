import { Directive } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

// export function validatorEmail(reg: RegExp): ValidatorFn{

//   return (control: AbstractControl): ;
// }

@Directive({
  selector: '[appValidators]'
})
export class ValidatorsDirective {

  constructor() { }


}
