console.log(Vue);
//destructuracion con JS
const { createApp } = Vue

console.log(createApp);

createApp({
  data() {
    return {
      message: 'Hola mundo con VueJS!',
      title:'Peliculas y series ilimitadas y mucho más',
      subtitle:'Disfruta donde quieras. Cancela cuando quieras.',
      btnHref: 'register.html',
      btnClass: 'btn-cac',
      login: false,
      card: `
        <h1>Peliculas y series ilimitadas y mucho más</h1>
        <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
      `,
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
}).mount('#app')