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


//ESTRUCTURA CONDICION SWITCH-CASE
function parseRatingToStars(rating){
    switch (parseInt(rating)) {
        case 5:
            console.log('⭐⭐⭐⭐⭐');
            break;
        case 4:
            console.log('⭐⭐⭐⭐');
            break;
        case 3:
            console.log('⭐⭐⭐');
            break;
        case 2:
            console.log('⭐⭐');
            break;
        case 1:
            console.log('⭐');
            break;
        default:
            console.log('---');
            break;
    }
}

// parseRatingToStars(4.9);
// OPERADOR CONDICIONAL TERNARIO
function checkWatchMovie2(age,hasTicket){
    //asignacion de un valor de acuerdo a la comprobación de una condición
    let message = (age>=13 && hasTicket)?
                    'Puedes ver la pelicula':
                    'No cumples con los requisitos 😣';
    console.log(message);
}

// checkWatchMovie2(5,true);
// checkWatchMovie2(15,true);

//ESTRUCTURA DE CONTROL REPETITIVA - WHILE

function sellTicket(numberTicket){
    let ticket = 1;
    while(ticket <= numberTicket){
        console.log('Ticket vendido nro:', ticket);
        ticket = ticket+1;
    }
    console.log('Se vendieron todos los tickets');
}

// sellTicket(3);

// ESTRUCTURA REPETITIVA - FOR
function sellTicketFor(numberTicket){
    for(let i=1;i<=numberTicket;i++){
        console.log('Ticket vendido nro:', i);
    }
    console.log('Se vendieron todos los tickets con FOR');
}

sellTicketFor(4);