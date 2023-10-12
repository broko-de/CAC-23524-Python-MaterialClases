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
                        <img v-bind:src="movie.poster" alt="" class="movie-item-img">
                        <div class="movie-item-detail">
                            <p class="movie-item-detail-title">{{movie.name}}</p>
                            <p class="movie-item-detail-subtitle" v-if="movie.detail !='' ">{{movie.detail}}</p>
                            <p class="movie-item-detail-subtitle" v-else=>SIN DETALLES</p>
                        </div>
                    </a>
                </div>                    
            </div>
        </section>
    `,
    data() {
        return {
            movies:[
                {
                  name:'Mario Bros',
                  detail:'2023 - 6.9',
                  poster:'./static/img/mario.jpg'
                },
                {
                  name:'The Flash',
                  detail:'',
                  poster:'https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg'
                },
                {
                  name:'The Little Mermaid',
                  detail:'2023 - 6.4',
                  poster:'https://image.tmdb.org/t/p/w500/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg'
                },
                {
                  name:'Ruby Gillman, Teenage Kraken',
                  detail:'',
                  poster:'https://image.tmdb.org/t/p/w500/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg'
                },
                {
                  name:'Ruby Gillman, Teenage Kraken',
                  detail:'2023 - 6.9',
                  poster:'https://image.tmdb.org/t/p/w500/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg'
                }
              ]
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