var condicion = false;

// Estructura condicional
if(condicion){
    console.log('Se ejecuta cuando se cumple la condición==True');
}else{
    console.warn('No se cumple la condición.');
}

var age = "13";

if(age >= 13){
    console.log('Puedes ver la pelicula');
}else{
    console.warn('No tienes la edad suficiente, no puedes verla');
}

if (age == 13){
    console.log('Puedes ver la pelicula, acabas de cumplir 13');
}else if(age > 13){
    console.log('Puedes ver la pelicula');
}else{
    console.warn('No tienes la edad suficiente, no puedes verla');
}