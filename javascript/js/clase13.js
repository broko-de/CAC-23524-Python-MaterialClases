// Instruccion de console.log
console.log('Hola mundo JS, por consola');

/*
Esto es un comentario 
de multilineas
*/
//Formas de debuggear nuestro codigo
console.error('Esto es un error');
console.warn('Esta sucedendo algo inesperado en mi codigo');

//Declaración de una variable
var movie;
//Definición de una variable - asignación
movie = "El padrino";
// movie = 'El rey león';
console.log(movie); 
console.log(typeof(movie)); // tipo de dato string

var rating = 8;
console.log(typeof(rating)); //tipo de dato number
var rating2 = 9.0;
console.log(typeof(rating2)); //tipo de dato number
var rating3 = "6.5";
console.log(typeof(rating3)); //tipo de dato string
var isNew = false;
console.log(typeof(isNew)); // tipo de dato boolean

var movie2;
console.log(typeof(movie2)); // tipo de dato undefined

movie2 = null;
console.log(typeof(movie2)); // tipo de dato objeto

movie3 = {
    name: 'El padrino 2',
    rating: 8.5
}
console.log(typeof(movie3)); // tipo de dato objeto

//CONSTANTES snake_case y en mayuculas
const CURRENT_YEAR = 2023;
//CURRENT_YEAR=2024; un error.

//operadores aritmeticos
var average = (rating + rating2 + parseFloat(rating3))/3;
console.log(rating + rating2 + rating3);
console.log('El promedio es: ', average);





