import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordStrength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordStrengthDirective, multi: true }]
})
export class PasswordStrengthDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return null;
    }

    const hasUpperCase = /[A-Z]+/.test(value);
    const hasLowerCase = /[a-z]+/.test(value);
    const hasNumeric = /[0-9]+/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecial;

    return !passwordValid ? { passwordStrength: true } : null;
  }
}
