import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formulario";

describe( 'Formularios', () => {
  let componente: FormularioRegister;

  beforeEach( () => {
    componente = new FormularioRegister( new FormBuilder() );
  });

  it( 'Debe crear un formulario con dos campos, email y password', () => {
    expect( componente.form.contains('email')).toBeTruthy();
    expect( componente.form.contains('password')).toBeTruthy();
  });

  it( 'El email debe ser obligatorio', () => {
    const control = componente.form.get('email');
    if(control !=null){
      control.setValue('');
      expect( control.valid ).toBeFalsy();
    }
  });

  it( 'El email debe ser un correo válido', () => {
    const control = componente.form.get('email');
    if(control !=null){
      control.setValue('fernando@');
    expect( control.valid ).toBeFalsy(); //si fuera toBeTruthy no pasaría el test
    }
  });

  it( 'El email debe ser un correo válido otra forma', () => {
    const control = componente.form.get('email');
    if(control !=null){
      control.setValue('fernando@gmail.com');
    expect( control.valid ).toBeTruthy();
    }
  });
});
