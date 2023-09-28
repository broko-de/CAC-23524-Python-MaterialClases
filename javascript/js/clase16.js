let movie = {
    title:'El señor de los anillos 3',
    year: 2004,
    director: 'Peter Jackson',
    play: function(){
        console.log('Reproduciendo la pelicula');
    },
    stop: function(){
        console.log('Deteniendo la reproduccion');
    },
    viewCredits: function(){
        console.log('Titulo: ',this.title);
        console.log('Año: ',this.year);
        console.log('Director: ',this.director);
    }
}

// console.log(typeof(movie));
// movie.viewCredits();

// movie.title='El señor de los anillos 2';
// console.log(movie.title);
// movie.year=2003;
// console.log(movie.year);
// movie.play();
// movie.stop();
// movie.viewCredits();

// console.log(movie);

// movie.reparto = 'çualquiera';
// console.log(movie.reparto);

class Movie{
    constructor(titulo, anio, director){
        this.title=titulo;
        this.year=anio;
        this.director=director;        
    }

    play(){
        console.log('Reproduciendo la pelicula');
    }

    stop(){
        console.log('Deteniendo la reproduccion');
    }

    viewCredits(){
        console.log('Titulo: ',this.title);
        console.log('Año: ',this.year);
        console.log('Director: ',this.director);
    }
}

let movie2 = new Movie('El señor de los anillos 2',2003,'Peter Jackson');
movie2.viewCredits();

let movie3 = new Movie('Batman',2006,'Nolan');
movie3.viewCredits();


const viewMovie = () => {
    let div = document.querySelector('#movie-detail');
    // div.innerHTML='';
    let movie = new Movie('El señor de los anillos 1',2021,'Peter Jackson');
    let html = `
        <p>Titulo:${movie.title}</p>
        <p>Año:${movie.year}</p>
        <p>Director:${movie.director}</p>
    `;
    div.insertAdjacentHTML('beforeend',html)
}