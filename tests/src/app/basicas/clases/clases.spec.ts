import { Jugador } from "./clases";

describe('Pruebas de clase', () => {
  //const jugador = new Jugador(); //asi no se repite esta línea en todas pero fallaría los tests, porque no son independientes
  let jugador = new Jugador();

  //para ver cuándo se ejecutan
  /**
   *
   * se ejecuta solo al principio, por lo que, solo se ejecuta una vez
   * beforeAll( () => {
   *  console.log('beforeAll');
   * });
   *
   * se ejecuta antes de que inicie cada prueba
   * beforeEach( () => {
   *  console.log('beforeEach');
   * });
   *
   * se ejecuta solo al final del todo
   * afterAll( () => {
   *  console.log('afterAll');
   * });
   *
   * se ejecuta cada vez que termina un test, por lo que, solo se ejecuta una vez
   * afterEach( () => {
   *  console.log('afterEach');
   * });
   *
  */


  //hay que añadir esto para que no fallen los test con el const jugador de arriba
  beforeEach(() => {
    jugador.hp = 100; //restaura el valor de hp
    jugador = new Jugador(); //restaura todas las propiedades, es necesario que el jugador sea un let para ser modificado
  });


  //Otra forma de arreglarlo
  afterEach( () => {
    jugador.hp = 100; //restaura el valor de hp
  });

  //afterAll() o beforeAll() no sirven porque solo se ejecutan una vez

  it( 'Debe de retornar 80 de hp, si recibe 20 de daño', () => {
    //const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);
    expect( resp ).toBe(80);
  });

  it( 'Debe de retornar 50 de hp, si recibe 50 de daño', () => {
    //console.log('Esta prueba va a fallar');
    //const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);
    expect( resp ).toBe(50);
  });

  it( 'Debe de retornar 0 de hp, si recibe 100 de daño', () => {
    //const jugador = new Jugador();
    const resp = jugador.recibeDanio(100);
    expect( resp ).toBe(0);
  });

  it( 'Debe de retornar 0 de hp, si recibe 100 de daño o más', () => { //para que la rama de if quede cubierta en coverage
    //const jugador = new Jugador();
    const resp = jugador.recibeDanio(101);
    expect( resp ).toBe(0);
  });

});
