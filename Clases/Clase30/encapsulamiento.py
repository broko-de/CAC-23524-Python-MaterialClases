
class Movie:
    #atributo de clase
    movie_language = 'Ingles'
    movies_count = 0

    #metodo constructor
    def __init__(self, titulo, director,fecha_lanzamiento):
        #atributo privado
        self.__title = titulo
        self.__director = director
        self.release_date = fecha_lanzamiento  
        Movie.movies_count +=1

    def __str__(self):
        return 'Pelicula:'
        
    #metodos de la clase
    def __watch_movie(self):
        print(f'Reproduciendo la pelicula {self.__title}')
    

    #metodo getter
    def get_title(self):
        return self.__title

    #metodo setter
    def set_title(self,new_title):
        self.__title = new_title 

    #GETTER
    @property
    def prop_director(self):
        return self.__director
    
    #SETTER
    @prop_director.setter
    def prop_director(self,new_director):
        self.__director = new_director


movie1 = Movie('El señor de los anillos','P. Jackson','2000-01-01')
# movie1.set_title('Batman 2')
# print(movie1.get_title())
# print(movie1.watch_movie())
print(movie1.prop_director)
movie1.prop_director = 'Batman 2'
print(movie1.prop_director)

