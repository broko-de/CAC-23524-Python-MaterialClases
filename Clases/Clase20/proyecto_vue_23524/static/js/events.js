//destructuracion con JS
const { createApp } = Vue

createApp({
  data() {
    return {
        movies:[
            {
              name:'Mario Bros',
              rating:4,
            },
            {
              name:'The Flash',
              rating:2,
            },
            {
              name:'The Little Mermaid',
              rating:1,
            },
            {
              name:'Ruby Gillman, Teenage Kraken',
              rating:5,
            },
           
          ],
        newName:'',
        newRating:0
    }
  },
  methods:{
    addMovie(){
        if(this.newName!==''){
            let movie = {
                name: this.newName,
                rating: this.newRating 
            }
            this.movies.push(movie);
            this.newName='';
            this.newRating=0;
        }else{
            alert('Error');
        }
        
    }
  }
}).mount('#app')
