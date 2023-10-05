//TIPO DE SELECTORES PARA MANIPULAR EL DOM
const form = document.getElementById('formRegister');
// console.log(form);

//POR CLASE[]
const formControls = document.getElementsByClassName('form-control');
// console.log(formControls);

//POR ATRIBUTO NAME[]
const selectCountry = document.getElementsByName('country');
// console.log(selectCountry);

//POR TAG
const inputs = document.getElementsByTagName('input');
// console.log(inputs);

//QuerySelector
const inputNew = document.querySelector('input');
// console.log(inputNew);

const inputList = document.querySelectorAll('.form-control');
// console.log(inputList);

// CREAR ELEMENTOS HTML
const formRegister = document.querySelector('#formRegister');

const p = document.createElement('p');
p.innerHTML ='<b>No te olvides de completar el formulario</b>';
// p.textContent = '<b>No te olvides de completar el formulario</b>';
console.log(p);
formRegister.appendChild(p);

//EVENTOS HTML CON JS

const validarFormulario = (event) => {
    event.preventDefault();
    
    const firstname =document.querySelector('#firstname');
    const lastname = document.querySelector('#lastname');
    let validation = true;

    if(firstname.value===''){
        firstname.classList.add('error');
        const divError = document.querySelector('#error-firstname');
        divError.textContent = 'El nombre no puede ser vacio';
        validation=false;
    }
    if(lastname.value===''){
        validation=false;
        alert('El apellido no puede ser vacio.');
    }
    if(validation){
        formRegister.submit();
    }else{
        return false;
    }
}


formRegister.addEventListener('submit', validarFormulario);

// formRegister.addEventListener('submit', function(){
//     alert('Soy una funcion de validacion')
// });
