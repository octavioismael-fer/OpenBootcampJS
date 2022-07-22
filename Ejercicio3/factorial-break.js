let numFac = 10;

let resultado = 1;

while (numFac > 0) {
  let numMayor = 11;

  if (numFac < numMayor) {
    resultado = resultado * numFac;

    numFac--;
  } else {
    
    console.log("Saliste del bucle");
    break;
  }
}

console.log(resultado);
