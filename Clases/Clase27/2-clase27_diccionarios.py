movie = {
    'title':'Titanic',
    'year': 1997,
    'director':'Cameron'
}

movie['year'] = 2000
print(f"Pelicula: {movie['title']}, año: {movie['year']}, director: {movie['director']}")

# for i in movie.keys():
#     print(i)

# for i in movie.values():
#     print(i)

for key, value in movie.items():
    print(f'Key: {key}, Value:{value}')
    