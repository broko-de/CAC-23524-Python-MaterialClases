#PASAJE POR VALOR - TIPOS DE DATOS INMUTABLES
def triplicar_valor(numero):
    numero *= 3
    return numero

valor_original = 10
# print(f'El valor triplicado es: {triplicar_valor(valor_original)}')
# print(valor_original)

#PASAJE POR REFERENCIA - TIPOS DE DATOS MUTABLES
def agregar_elemento(lista,elemento):
    lista.append(elemento)

lista_original = [4,5,7,10]
# agregar_elemento(lista_original,89)

# print(lista_original)


#Devolucion de varios valores en funciones
def obtener_estadisticas(lista):
    suma = sum(lista)
    promedio = suma / len(lista)
    maximo = max(lista)
    minimo = min(lista)
    return (suma, promedio,maximo, minimo)

valores =[4,6,1,70,44]
resultados = obtener_estadisticas(valores)
# s,p,maxi,mini = obtener_estadisticas(valores)
print(resultados)