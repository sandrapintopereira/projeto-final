import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//abstractControl - input que a função recebe -> acesso ao value que o user digitou
//validationErrors - tipo de erro se inválido 
//validatorFn - para angular saber que é função de validação

export function validarAno(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
    const ano = control.value;
    
    if(ano) {
        if(ano < 1900 || ano > 2026) {
            return { validarAnoValidator: true}
        } 
    }
    return null;
}
}