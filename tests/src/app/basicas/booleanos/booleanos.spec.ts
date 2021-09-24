import { usuarioIngresado, usuarioNoIngresado } from "./booleanos";

describe('Pruebas de booleanos', () => {
  it ('Debe de retornar true', () => {
    const res = usuarioIngresado();
    expect( res ).toBe(true);
  });

  it ('Debe de retornar true otra forma', () => {
    const res = usuarioIngresado();
    expect( res ).toBeTruthy();
  });

  it ('Debe de retornar false', () => {
    const res = usuarioNoIngresado();
    expect( res ).toBeFalsy();
  });

  it ('Debe de retornar false otra forma', () => {
    const res = usuarioNoIngresado();
    expect( res ).not.toBeTruthy();
  });

});
