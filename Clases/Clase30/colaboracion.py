#RELACION DE AGREGACION
class Genre:

    def __init__(self,name):
        self.name = name       

    def __str__(self):
        return self.name

class Director:

    def __init__(self,lastname):
        self.lastname = lastname  

    def __str__(self):
        return self.lastname
    
    def show(self):
        print(f'Soy el director: {self.lastname}')

#COMPOSICION
class Review:

    def __init__(self,reviewer_name,comment,rating):
        self.reviewer_name = reviewer_name
        self.comment = comment
        self.rating = rating

    def show_detail(self):
        print(f'Revisor: {self.reviewer_name} - Calificacion: {self.rating}')

class Movie:
    #atributo de clase
    movie_language = 'Ingles'
    movies_count = 0

    #metodo constructor
    def __init__(self, titulo, obj_director,fecha_lanzamiento):
        #Atributos de la clase
        self.title = titulo
        #Relacion de agregacion con clase Director
        self.director = obj_director
        self.release_date = fecha_lanzamiento 
        #listado de objetos de la clase Genre
        self.genres = [] 
        #listado de objetos de la clase Review
        self.reviews = []
        Movie.movies_count +=1

    def __str__(self):
        return f'Pelicula: {self.title} - {self.director.lastname} ({self.release_date})'
        
    #metodos de la clase
    def add_genre(self,genre):
        #Agregar al listado de genres un objeto de la clase Genre
        self.genres.append(genre)

    def add_review(self,new_reviewer_name,new_comment,new_rating):
        #Genero una instancia de la clase Review dentro de la clase Movie
        review_obj = Review(new_reviewer_name,new_comment,new_rating)
        self.reviews.append(review_obj)

    def watch_movie(self):
        print(f'Reproduciendo la pelicula {self.title}')

director1 = Director('Jackson')

movie1 = Movie('El señor de los anillos',director1,'2000-01-01')
print(movie1)
genre1 = Genre('Accion')
genre2 = Genre('Drama')

movie1.add_genre(genre1)
movie1.add_genre(genre2)

movie1.add_review('Fulanito','La pelicula es muy buena',5)

for genre in movie1.genres:
    print(genre.name)
