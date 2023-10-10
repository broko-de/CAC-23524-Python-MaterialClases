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
      login: true,
      card: `
        <h1>Peliculas y series ilimitadas y mucho más</h1>
        <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
      `
    }
  }
}).mount('#app')