const API_SERVER = 'http://127.0.0.1:8000';

// Función para realizar la petición fetch
async function fetchData(url, method, data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    };

    const response = await fetch(url, options);
    return await response.json();
}

async function fetchDataWithFile(url, method, formData) {
    const options = {
        method: method,
        body: formData,
    };

    const response = await fetch(url, options);
    return await response.json();
}

document.getElementById('btn-add-movie').addEventListener('click', async function () {
    const idMovie = document.querySelector('#id_movie');
    const title = document.querySelector('#title').value;
    const director = document.querySelector('#director').value;
    const releaseDate = document.querySelector('#release_date').value;
    const bannerFileInput = document.querySelector('#banner-form');
    const banner = bannerFileInput.files[0];

    const formData = new FormData();
    formData.append('title', title);
    formData.append('director', director);
    formData.append('release_date', releaseDate);
    formData.append('banner', banner);
    let result = null;
    if(idMovie.value!==""){
      result = await fetchDataWithFile(`${API_SERVER}/api/update_movie/${idMovie.value}/`, 'PUT', formData);
    }else{
      result = await fetchDataWithFile(`${API_SERVER}/api/create_movie/`, 'POST', formData);
    }
    const formMovie = document.querySelector('#form-movie');
    idMovie.value=''
    formMovie.reset();
    alert(result.message);

    showMoviesTable();
});

  /**
   * Funcion que permite crear un elemento <tr> para la tabla de peliculas
   * por medio del uso de template string de JS.
   */
  async function showMoviesTable(){
    let movies =  await fetchData(API_SERVER+'/api/movies/', 'GET');
    const tableMovies = document.querySelector('#list-table-movies tbody');
    tableMovies.innerHTML='';
    movies.forEach((movie, index) => {
      let tr = `<tr>
                    <td>${movie.title}</td>
                    <td>${movie.director}</td>
                    <td>${movie.release_date}</td>
                    <td>
                        <img src="${API_SERVER+movie.banner}" width="30%">
                    </td>
                    <td>
                        <button class="btn-cac" onclick='updateMovie(${movie.id})'><i class="fa fa-pencil" ></button></i>
                        <button class="btn-cac" onclick='deleteMovie(${movie.id})'><i class="fa fa-trash" ></button></i>
                    </td>
                  </tr>`;
      tableMovies.insertAdjacentHTML("beforeend",tr);
    });
  }
  
  /**
   * Function que permite eliminar una pelicula del array del localstorage
   * de acuedo al indice del mismo
   * @param {number} id posición del array que se va a eliminar
   */
  async function deleteMovie(id){
    let response = await fetchData(`${API_SERVER}/api/delete_movie/${id}/`, 'DELETE');
    console.log(response);
    showMoviesTable();
  }

  /**
   * Function que permite eliminar una pelicula del array del localstorage
   * de acuedo al indice del mismo
   * @param {number} id posición del array que se va a eliminar
   */
  async function updateMovie(id){
    let response = await fetchData(`${API_SERVER}/api/movies/${id}/`, 'GET');
    const idMovie = document.querySelector('#id_movie');
    const title = document.querySelector('#title');
    const director = document.querySelector('#director');
    const releaseDate = document.querySelector('#release_date');
    
    idMovie.value = response.id;
    title.value = response.title;
    director.value = response.director;
    releaseDate.value = response.release_date;
  }
  
//   //Agregar eventos a elementos una vez que contenido haya sido cargado en el DOM
//   document.addEventListener('DOMContentLoaded', function() {
//     const btnAddMovie = document.querySelector('#btn-add-movie');
//     btnAddMovie.addEventListener('click',addMovie);
//   });
  
//   showMoviesDiv();
  showMoviesTable();
  