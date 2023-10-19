const API_SERVER = 'https://api.themoviedb.org/3';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
    }
}

const bannerComponent = {
    template: `
        <section id="banner" class="d-flex">                
            <div class="banner-card container">
                <h1>{{title}}</h1>
                <h2>{{subtitle}}</h2>
                <h3>Cambio en la componente</h3>
                <a v-bind:href="btnHref" v-bind:class="btnClass" v-show="login">Registrate</a>
            </div>
        </section>
    `,
    data() {
        return {
            title:'Peliculas y series ilimitadas y mucho más',
            subtitle:'Disfruta donde quieras. Cancela cuando quieras.',
            btnHref: 'register.html',
            btnClass: 'btn-cac',
            login: false,
        }
    }
}

const moviesComponent = {
    template: `
        <section id="popular" class="container">
            <h2 class="h2-subtitle">Las tendencias de hoy</h2>
            <div id="popular-list" class="movies-grid">
                <div class="movie-item" v-for="movie in movies">
                    <a href="detail-movie.html">
                        <img v-bind:src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="" class="movie-item-img">
                        <div class="movie-item-detail">
                            <p class="movie-item-detail-title">{{movie.title}}</p>
                            <p class="movie-item-detail-subtitle">{{movie.release_date}} - {{movie.vote_average}}</p>                            
                        </div>
                    </a>
                </div>
                <div>
                    <button class='btn-cac' v-on:click="fetchPrevMovies()">Anterior</button>
                    <button class='btn-cac' v-on:click="fetchNextMovies()">Siguiente</button>
                </div>           
            </div>
        </section>
    `,
    data() {
        return {
            movies:[],
            page: 1
        }
    },
    created(){
        this.fetchMovies();
    },
    methods:{
        async fetchMovies(){
            const response = await fetch(`${API_SERVER}/movie/popular?page=${this.page}`,options);
            const data = await response.json();
            this.movies = data.results
        },
        async fetchNextMovies(){
            this.page++;
            const response = await fetch(`${API_SERVER}/movie/popular?page=${this.page}`,options);
            const data = await response.json();
            this.movies = data.results
        },
        async fetchPrevMovies(){
            this.page--;
            const response = await fetch(`${API_SERVER}/movie/popular?page=${this.page}`,options);
            const data = await response.json();
            this.movies = data.results
        }
    }
}

const { createApp } = Vue


createApp({
    components : {
        'banner': bannerComponent,
        'movies-grid':moviesComponent,
    }
}).mount("#app")