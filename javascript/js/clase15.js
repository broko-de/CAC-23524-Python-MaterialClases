//definicion de una funcion - declarativa
function helloWorld(){
    console.log('Hola mundo con fuciones 👋🏽');
}

//llamada a una funcion
// helloWorld();

/**
 * función que determina si una persona mayor a 13 puede ver una pelicula
 * @param {number} age - edad a evaluar
 */
function checkAgeForMovie(age){
    if(age >= 13){
        console.log('Puedes ver la pelicula');
    }else{
        console.warn('No tienes la edad suficiente, no puedes verla');
    }
}
//llamada a la funcion - envia argumentos
// checkAgeForMovie(20);

var edad = 15;
//se envia como argumento una variable
// checkAgeForMovie(edad);

//Definir parametros con valores por defecto
function checkWatchMovie(age,hasTicket=false){
    console.log('tiene ticket?: ',hasTicket);    
    if(age >= 13 && hasTicket === true){
        console.log('Puedes ver la pelicula');
    }else{
        console.warn('No cumples con los requisitos, no puedes verla');
    }
}

// checkWatchMovie(5,true);
// checkWatchMovie(15,true);
// checkWatchMovie(false,25); Importante respetar el orden de los argumento
// checkWatchMovie(25);

//SCOPE
//definicion de una variable global 
var globalMovie = 'Inception';

function watchMovie(){
    // definicion de una variable local a la funcion
    var localMovie = 'Esperando la carroza';
    globalMovie = 'Titanic'; // Modifica el valor de la variable global
    console.log('Estoy viendo: ',localMovie);
    console.log('Estoy viendo: ',globalMovie);
}

// watchMovie();
// console.log('Pelicula global: ',globalMovie);
//console.log('Pelicula local: ',localMovie); Error porque no puedo acceder a variable local de una funcion

let movie1 = 'relatos salvajes';

function getMovie(){
    let movie1 = 'Mario Bros';
    movie1 = 'Barbie';

    if(true){
        var movie2='Megalodon 2';
        let movie3='La monja 2';
        const movie4 = 'El padrino';
        if(true){            
            console.log('evaluando scope let:',movie3);
        }
        // movie4='El padrino 2'; Error re-asignacion a una constante
    }

    console.log(movie1);
    console.log(movie2);
    // console.log(movie3); Error al trabaja con variable del scope de bloque
    // console.log(movie4);
}

getMovie();
console.log(movie1);