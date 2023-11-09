def hello_world():
    print('Hola mundo con funciones!')

def sumar(a,b):
    resultado = a + b
    return resultado
    # return a+b

# hello_world()
# r = sumar(30)
# numero_1 = int(input('Ingrese un valor 1: '))
# numero_2 = int(input('Ingrese un valor 2: '))

# print(f'La suma es {sumar(numero_1,numero_2)}')

#Parametros por defecto
def saludar(nombre="Pepe",saludo="Hola"):    
    print(f'{saludo}, {nombre}')

# saludar('Pedro','Buen día')
# saludar('Julian')
# saludar()

#Indicando los argumentos de forma explicita
# saludar(saludo="Buenas tardes",nombre="Nicolas")

def sumar_dos(a,b,*args):
    total = a + b
    print(args)
    for numero in args:        
        total += numero
    
    return total

resultado_1 = sumar_dos(1,4,10,3,6,2)
resultado_2 = sumar_dos(1,4,77)
# print(f'El resultado: {resultado_1}')
# print(f'El resultado: {resultado_2}')


def saludar_dos(nombre,saludo, **kwargs):
    print(f'{saludo}, {nombre}')
    print(kwargs)
    for key,value in kwargs.items():
        print(f'Key: {key}, Value:{value}')

saludar_dos(mensaje_uno='Como estas?',
            otro='valor',
            nombre='Julian',
            saludo='Hi!',
            mensaje_dos='Nos vemos!')

