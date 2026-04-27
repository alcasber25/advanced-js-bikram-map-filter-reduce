//RESUELVE LOS EJERCICIOS AQUI

// - [ ] 1.- Dado el array **numbers** cuyo valor sea [4, 5, 6, 7, 8, 9, 10], crea una función **elevados** que sea el resultado de elevar cada número a si mismo.


const numbers = [4, 5 ,6 ,7 ,8 ,9, 10];

const elevados = () => numbers.map(num => num ** num);

console.log(elevados);


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

let result2 = foodList.map((comida) => {
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

console.log(result2);

// - [ ] 3.- Dado el  array **staff**, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:

const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];

const result3 = staff.map ((person) => {
  return `${person.name} es ${person.role} y le gusta ${person.hobbies.join (' y ')}`
});

console.log (result3)

//- [ ] 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter((numero)=> {
    return numero %2 !== 0;
});

console.log(result4)

// - [ ] 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo


const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];

const result5 = foodList2
  .filter(plato => plato.isVeggie)
  .map(plato => {
    const esTofu = plato.name.toLowerCase().includes('tofu');
    const articulo = esTofu ? 'rica' : 'rico';
    return `Que ${articulo} ${plato.name} me voy a comer!`;
  });

console.log(result5);


// - [ ] 6.- Dado el array **inventory**, devolver un array con los nombres de los elementos que valgan más de 300 euros.


const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];


const result6 = inventory
.filter(objeto => objeto.price > 300)
.map(objeto => objeto.name);

console.log(result6);


// - [ ] 7.- Dado el siguiente array **numeros** [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array

const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((total, actual) => total * actual, 1);

console.log (result7);


// - [ ] 8.- Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
'Me',
'llamo',
'Aldo',
'y',
'quiero',
'sentir',
'la',
'fuerza',
'con',
'javascript'
];

const result8 = sentenceElements.reduce((frase, palabra) => frase + ' ' + palabra);

console.log (result8);

// - [ ] 9.- Obtener el monto total de los elementos que pertenecen a catergory "code" en el siguiente array.

const books = [
{
name: ' JS for dummies',
author: 'Emily A. Vander Veer',
price: 20,
category: 'code'
},
{
name: 'Don Quijote de la Mancha',
author: 'Cervantes',
price: 14,
category: 'novel'
},
{
name: 'Juego de tronos',
author: 'George R. Martin',
price: 32,
category: 'Fantasy'
},
{
name: 'javascript the good parts',
author: 'Douglas Crockford',
price: 40,
category: 'code'
}
];

// Resultado --> 60

const result9 = books

  .filter(libro => libro.category === 'code')
  .reduce((total, libro) => total + libro.price, 0);

  console.log (result9)