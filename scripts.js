/*Ejercicios Map
Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo*/
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
let multiplyByn = n => n * n;
let numbersTimesn = numbers.map(multiplyByn);
console.log(numbersTimesn);

/*Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado*/
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const foodCountry = ['Italia', 'Japón', 'Valencia'];
const foodCountryList = foodList.map((element, indice)=>{
  if(element == 'Entrecot'){
    console.log(`Aunque no como carne, el ${foodList[3]} es sabroso`)
  }
  else { 
    console.log(`Como soy de ${foodCountry[indice]}, amo comer ${foodList[indice]}`)
  }
})

/*Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:*/
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

const staffProperties = staff.map((element)=> {
    console.log(`${element.name} es ${element.role} y le gusta el ${element.hobbies[0]} y ${element.hobbies[1]} `)
  })

  /*2. Ejercicios Filter
Crea un segundo array con que devuelva los impares*/

const numbersB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersOdd = numbersB.filter ((element) => {
  if (element % 2 == 1){
    return(element)
  }
})
console.log (numbersOdd)

/*Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo*/
const foodListB = [
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
 }
];

/*.filter((element) => condición). -> No modifica elementos . Si la funcion no lleva un return no se almacena*/

/*const veganFood = foodListB.filter((element) =>{
 if (element.isVeggie == true) {
   console.log (`Que rico ${element.name} me voy a comer!`)
 }
 })*/

const veganFood = foodListB.filter((element)=>{
return element.isVeggie == true
}).map((element) => {
  return `Que rico ${element.name} me voy a comer!`
}) 
console.log(veganFood)


/*Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros*/
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
   name: 'Viaje a cancún',
   price: 600
 },
 {
   name: 'Mascarilla',
   price: 1
 }
];
 
const inventoryFiltered = inventory.filter((element) => {
return element.price>300
}).map((element)=>{
  return element.name
})
console.log(inventoryFiltered)



/*3. Ejercicios reduce
Dado el siguiente array, obten la multiplicación de todos los elementos del array*/
const numeros = [39, 2, 4, 25, 62];
let multiplicacion = numeros.reduce(function(a, b){
  return a * b;
});
console.log(multiplicacion)
 
/*Concatena todos los elementos del array con reduce para que devuelva una sola frase*/
const sentenceElements = [
 'Me',
 'llamo',
 'Taniu',
 'y',
 'quiero',
 'sentir',
 'la',
 'fuerza',
 'con',
 'javascript'
];
 
 const concatenaElements = sentenceElements.reduce((acumulado , actual) => {
   return acumulado + " " + actual
 })
 console.log (concatenaElements)

