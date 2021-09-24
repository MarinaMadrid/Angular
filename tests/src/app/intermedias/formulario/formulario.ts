import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class FormularioRegister {
  form: FormGroup;

  constructor( fb: FormBuilder ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
      //pass: ['', Validators.required] //daría error porque en el test pide password
    });
  }
}
