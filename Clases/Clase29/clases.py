class Genre:

    def __init__(self,name):
        self.name = name       

    def __str__(self):
        return self.name


class Movie:
    #atributo de clase
    movie_language = 'Ingles'
    movies_count = 0

    #metodo constructor
    def __init__(self, titulo, director,fecha_lanzamiento):
        #Atributos de la clase
        self.title = titulo
        self.director = director
        self.release_date = fecha_lanzamiento  
        Movie.movies_count +=1

    def __str__(self):
        return 'Pelicula:'
        
    
    #metodos de la clase
    def watch_movie(self):
        print(f'Reproduciendo la pelicula {self.title}')

#genero un objeto - instancia de la clase Movie
# movie1 = Movie()
# movie1.title = 'El señor de los anillos'
# movie1.release_date = '2000-01-01'
# movie1.director = 'P. Jackson'
#print(f'Pelicula: {movie1.title}')
#ejecutar metodos de la clase
# movie1.watch_movie()


#instancio un objeto de la clase - Envio valores
movie1 = Movie('El señor de los anillos','P. Jackson','2000-01-01')
print(movie1)
movie1.watch_movie()

#Modificar el valor del atributo de clase desde la misma Clase
#Movie.movie_language = 'Italiano'

movie2 = Movie('Batman 2','C. Nolan','2006-01-01')
print(f'Pelicula: {movie2.title} - {movie2.director}')
print(f'Idioma peli2: {movie2.movie_language}')

# print(f'Idioma peli1: {movie1.movie_language}')

movie3 = Movie('Esperando la carroza','1985-01-01','Director')
#desde una instancia modifico el atributo de clase
#pero eso implica que se modifique para el resto de las instancias
movie3.movie_language = 'Español'
print(f'Idioma peli3: {movie3.movie_language}')

print(f'Cantidad de peliculas: {Movie.movies_count}')

# genre1 = Genre('Accion')
# print(genre1)
# genre2 = Genre('Drama')
# print(genre2)
