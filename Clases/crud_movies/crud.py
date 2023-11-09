# movies = [
#     {
#         'id_movie':1,
#         'title':'Titanic',
#         'release_year': 1997,
#         'genres': ['Romance','Drama'] #'Romance, Drama'
#     }
# ]

def create_movie(movies):
    """Metodo para crear una pelicula y agregarla al listado
    """
    id_movie = len(movies) + 1
    title = input('Ingrese el título de la pelicula: ')
    release_year = int(input('Ingrese el año de lanazamiento: '))
    genres = input('Ingrese los géneros separados por comas: ')

    movie = {
        'id_movie': id_movie,
        'title': title,
        'release_year': release_year,
        'genres': genres.split(',')
    }
    movies.append(movie)
    print(f'Pelicula: {title} creada exitosamente.')

def read_movies(movies):
    """
        Metodo para listar las peliculas
    """
    if len(movies) == 0:
        print('No hay peliculas registradas.')
    else:
        print("\nListado de peliculas:")
        for movie in movies:
            print(f"Id: {movie['id_movie']}, Título: {movie['title']},Año: {movie['release_year']},Géneros: {', '.join(movie['genres'])}")

def update_movie(movies):
    id_movie = int(input('Ingrese el ID de la pelicula a modificar: '))
    for movie in movies:
        if movie['id_movie'] == id_movie:
            movie['title'] = input('Ingrese nuevo título de la pelicula: ')
            movie['release_year'] = int(input('Ingrese nuevo año de lanazamiento: '))
            movie['genres'] = input('Ingrese nuevos géneros separados por comas: ').split(',')
            print(f"Pelicula con Id {id_movie} fue modificada con éxito.")
            return
        
    print(f'No se encontró una pelicula con el Id {id_movie}')

def delete_movie(movies):
    id_movie = int(input('Ingrese el ID de la pelicula a eliminar: '))
    for movie in movies:
        if movie['id_movie'] == id_movie:
            movies.remove(movie)
            print(f"Pelicula con Id {id_movie} fue eliminada con éxito.")
            return
        
    print(f'No se encontró una pelicula con el Id {id_movie}')
        
def show_menu():
    print("\n --- Menú ---")
    print("1. Crear pelicula")
    print("2. Listar peliculas")
    print("3. Modificar una pelicula")
    print("4. Eliminar una pelicula")
    print("5. Salir")

movies = []
option = 0
while option != 5:
    show_menu()
    option = int(input('Ingrese la opción deseada (1-5): '))

    if option == 1:
        create_movie(movies)
    elif option == 2:
        read_movies(movies)
    elif option == 3:
        update_movie(movies)
    elif option == 4:
        delete_movie(movies)
    elif option == 5:
        print('Finalizó el programa!')
    else:
        print('Opción inválida. Por favor, ingrese una opción entre (1-5)')
    

