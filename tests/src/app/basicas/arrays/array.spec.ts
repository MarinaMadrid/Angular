import { obtenerRobots } from "./array";

describe('Pruebas de arrays', () => {
  it('Debe de retornar al menos 4 robots', () => {
    const res = obtenerRobots();
    expect( res.length ).toBe(4);
  });

  it('Debe de retornar al menos 4 o más robots', () => {
    const res = obtenerRobots();
    expect( res.length ).toBeGreaterThanOrEqual(3);
  });

  it('Debe de existir MegaMan y Ultron', () => {
    const res = obtenerRobots();
    expect( res ).toContain('MegaMan');
    expect( res ).toContain('Ultron');
  });

});
