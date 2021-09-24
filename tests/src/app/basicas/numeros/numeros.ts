export function incrementar( numero:number ) {
  if (numero > 100){
    return 100;
  } else {
    return numero +1; //si esto estuviese comentado, sería undefined, y fallaría el test
  }
}
