const API_SERVER = 'https://api.themoviedb.org/3';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
}

// ASINCRONA
// const fetchMovies = () => {
//     fetch(`${API_SERVER}/movie/popular`,options)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response);
//             let movies = response.results;
//             let divPopular = document.querySelector('#popular-list');
//             for (let i = 0; i < movies.length; i++) {
//                 let html = `
//                         <div class="movie-item">
//                             <a href="detail-movie.html">
//                                 <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="" class="movie-item-img">
//                                 <div class="movie-item-detail">
//                                     <p class="movie-item-detail-title">${movies[i].title}</p>
//                                     <p class="movie-item-detail-subtitle">${movies[i].release_date} - ${movies[i].vote_average}</p>
//                                 </div>
//                             </a>
//                         </div>
//                 `;
//                 divPopular.insertAdjacentHTML('beforeend',html);
                
//             }
//             console.log('Terminando la llamada a la API');

//         })        
//         .catch(err => console.error(err));
// }

// SINCRONA - Async - await

// async function fetchMovies(){

// }

const fetchMovies = async () => {

    const response = await fetch(`${API_SERVER}/movie/popular`,options);
    const data = await response.json();
    const movies = data.results;
    console.log(data);
    let divPopular = document.querySelector('#popular-list');
    for (let i = 0; i < movies.length; i++) {
        let html = `
                <div class="movie-item">
                    <a href="detail-movie.html">
                        <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="" class="movie-item-img">
                        <div class="movie-item-detail">
                            <p class="movie-item-detail-title">${movies[i].title}</p>
                            <p class="movie-item-detail-subtitle">${movies[i].release_date} - ${movies[i].vote_average}</p>
                        </div>
                    </a>
                </div>
        `;
        divPopular.insertAdjacentHTML('beforeend',html);
        
    }
    console.log('Terminando la llamada a la API');

    // fetch()
    //     .then(response => response.json())
    //     .then(response => {
    //         console.log(response);
    //         let movies = response.results;
    //         let divPopular = document.querySelector('#popular-list');
    //         for (let i = 0; i < movies.length; i++) {
    //             let html = `
    //                     <div class="movie-item">
    //                         <a href="detail-movie.html">
    //                             <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="" class="movie-item-img">
    //                             <div class="movie-item-detail">
    //                                 <p class="movie-item-detail-title">${movies[i].title}</p>
    //                                 <p class="movie-item-detail-subtitle">${movies[i].release_date} - ${movies[i].vote_average}</p>
    //                             </div>
    //                         </a>
    //                     </div>
    //             `;
    //             divPopular.insertAdjacentHTML('beforeend',html);
                
    //         }
    //         console.log('Terminando la llamada a la API');

    //     })        
    //     .catch(err => console.error(err));
}

console.log('LLamada a la API');
fetchMovies();
console.log('Continuando con la ejecución del codigo');

