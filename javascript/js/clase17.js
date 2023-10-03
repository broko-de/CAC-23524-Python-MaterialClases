let arrayMovies = ['Batman',true,4,'Mario bros','El señor de los anillos'];
let arrayRatings = [2,4.5,5,1];

// console.log(typeof(arrayMovies));
// console.log(arrayMovies[1]);
// console.log(arrayRatings);

//FUNCIONES CON ARRAYS
const showArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Posición: ${i}, Elemento: ${arr[i]}`);
        // console.log("Posición:"+i+" Elemento: "+arr[i]);
    }
}

// showArray(arrayMovies);
// showArray(arrayRatings);

let movies = [];

const addMovie = () => {
    let input = document.querySelector('#movieInput');
    // console.log(input);
    if(movies.includes(input.value)){ // Evalua si un valor esta dentro del array
        alert('Error, ya agregaste esta pelicula');
    }else{
        movies.push(input.value); // agrega al final de un array
        input.value='';
    }
    console.log(movies);    
}

const showMovies = () => {
    let div = document.querySelector('#movie-list');
    div.innerHTML = '';
    for (let i = 0; i < movies.length; i++) {
        let html = `<p>Pelicula: ${movies[i]}</p>`
        div.insertAdjacentHTML('beforeend',html);
    }
}

const deleteMovie = () => {
    let input = document.querySelector('#movieInput');
    let index = movies.indexOf(input.value); // posicion del vector dado un valor
    if(index === -1){
        alert('La pelicula que quiere eliminar no existe.');
    }else{
        movies.splice(index,1);//Eliminamos del array segun la posición y cantidad de elementos
        alert('Se elimino correctamente');
    }
    console.log(movies);
}

// localStorage.setItem('movie1','El hobbit');
// localStorage.setItem('movie2','Batman');
let movie1=localStorage.getItem('movie1');
console.log(movie1);