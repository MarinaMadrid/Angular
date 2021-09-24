//describe('Pruebas de String'); //describe agrupa tests
//it('Debe regresar un string') //prueba individual
//it('Debe contener un nombre')

import { mensaje } from "./string";


describe('Pruebas de Strings', () => {
  it('Debe de regresar un string', () => {
    const resp = mensaje('Fernando');
    //expect( typeof resp === 'string');
    expect( typeof resp ).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const resp = mensaje('Fernando');
    //const resp = mensaje('Pedro'); //da error
    expect( resp ).toBe('Saludos Fernando');
  });

  it('Debe de retornar un saludo con el nombre enviado más profesional', () => {
    const nombre = 'Juan';
    const resp = mensaje( nombre );
    expect( resp ).toBe('Saludos ' + nombre);
    //expect( resp ).toBe('Saludos' + nombre); //da error
  });

  it('Debe de retornar un saludo con el nombre enviado superprofesional', () => {
    const nombre = 'Juan';
    const resp = mensaje( nombre );
    expect( resp ).toContain(nombre); //esta opción es más útil si cambian el mensaje, como poner Saludos y muchos signos de exclamación
  });

});
