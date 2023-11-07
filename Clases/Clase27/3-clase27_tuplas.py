movie = ('Titanic',1997,'Cameron')
movie_2 = ('El padrino',1972,'Coppola')
movie_3 = 'Interestelar',2014,'Nolan'

print(movie[0])

#DESTRUCTURACION - DESEMPAQUETADO COMPLETO
title, year, director = movie

print(f"Pelicula: {title}, Año: {year}, Director: {director}")

#DESEMPAQUETADO IGNORANDO ELEMENTOS FINALES
title_2, year_2 = movie_2
print(f"Pelicula: {title_2}, Año: {year_2}")

#DESEMPAQUETADO IGNORANDO ELEMENTOS INTERMEDIOS
title_3, _, director_3 = movie_3
print(f"Pelicula: {title_3}, Director: {director_3}")
