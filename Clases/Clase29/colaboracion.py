#RELACION DE AGREGACION
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
        self.genres = [] 
        Movie.movies_count +=1

    def __str__(self):
        return f'Pelicula: {self.title} - {self.director} ({self.release_date})'
        
    #metodos de la clase
    def add_genre(self,genre):
        self.genres.append(genre)

    def watch_movie(self):
        print(f'Reproduciendo la pelicula {self.title}')

movie1 = Movie('El señor de los anillos','P. Jackson','2000-01-01')
genre1 = Genre('Accion')
genre2 = Genre('Drama')

movie1.add_genre(genre1)
movie1.add_genre(genre2)

for genre in movie1.genres:
    print(genre.name)
