peliculas = ['Titanic','El Padrino','Avatar','Batman']
peliculas[2]='El señor de los anillos'
# print(peliculas[2])

# nueva_pelicula = input("Ingrese una nueva pelicula")
# peliculas.append(nueva_pelicula)
# print(f"Lista de peliculas actualizada {peliculas}")

pelicula_a_eliminar = input("Ingrese el nombre de la pelicula a eliminar: ")
if pelicula_a_eliminar in peliculas:
    peliculas.remove(pelicula_a_eliminar)
    print(f"Lista de peliculas actualizada {peliculas}")
else:
    print(f"La pelicula {pelicula_a_eliminar} no se encuentra en el listado")
