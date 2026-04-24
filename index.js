//RESUELVE LOS EJERCICIOS AQUI

// - [ ] 1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función **elevados** que sea el resultado de elevar cada número a si mismo.

let numbers = [4, 5 ,6 ,7 ,8 ,9, 10];

function elevados() {
    return numbers.map (n => n ** n);
}

console.log(elevados());


// - [ ] 2.- Dado el array **foodList** con valor ['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array que consiga generar de salida el resultado esperado.
// ```
// [
//     'Como soy de Italia, amo comer Pizza',
//     'Como soy de Japón, amo comer Ramen',
//     'Como soy de Valencia, amo comer Paella',
//     'Aunque no como carne, el Entrecot es sabroso'
// ]
// ```


let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

let resultado = foodList.map((comida) => {
  switch (comida) {

    case 'Pizza':
      return `Como soy de Italia, amo comer ${comida}`;

    case 'Ramen':
      return `Como soy de Japón, amo comer ${comida}`;

    case 'Paella':
      return `Como soy de Valencia, amo comer ${comida}`;

    case 'Entrecot':
      return `Aunque no como carne, el ${comida} es sabroso`;

  }
});

console.log(resultado);