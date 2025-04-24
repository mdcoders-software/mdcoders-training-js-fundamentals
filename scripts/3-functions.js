const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const registrar = document.getElementById('registrar');
const listado = document.getElementById('listado');
const limpiar = document.getElementById('limpiar');
const errorNombre = document.getElementById('error_nombre');
const errorApellido = document.getElementById('error_apellido');
const errorCorreo = document.getElementById('error_correo');
const form = document.getElementById('form');


let registro = '';

registrar.addEventListener('click', e => {
    e.preventDefault();
    // const isValid = validarCampos();
    if (validarCampos()) {
        registro += `${nombre.value} 
        ${apellido.value} 
        ${correo.value}`
        listado.innerHTML = registro
        borrarCampos();
    }
})

limpiar.addEventListener('click', () => {
    borrarCampos();
})

nombre.addEventListener('keypress', (e) => {
    errorNombre.style.display = 'none';
    nombre.style.borderColor = 'black';
})

apellido.addEventListener('keypress', (e) => {
    errorApellido.style.display = 'none';
    apellido.style.borderColor = 'black';
})

correo.addEventListener('keypress', (e) => {
    errorCorreo.style.display = 'none';
    correo.style.borderColor = 'black';
})

function borrarCampos() {
    nombre.value = '';
    apellido.value = '';
    correo.value = ''
}

function validarCampos() {
    let isValid = true;
    if (nombre.value.length == 0) {
        errorNombre.style.display = 'inline';
        nombre.style.borderColor = 'red';
        isValid = false;
    }

    if (apellido.value.length == 0) {
        errorApellido.style.display = 'inline';
        apellido.style.borderColor = 'red';
        isValid = false;
    }

    if (correo.value.length == 0) {
        errorCorreo.style.display = 'inline';
        correo.style.borderColor = 'red';
        isValid = false;
    }
    return isValid;
}

// console.log(nombre.value.length)








;



// const objeto = {
//     propiedad1: 1,
//     otraFuncion() {
//         miFuncion();
//         funcion();
//         console.log(this);
//     }
// }

// function funcion() {
//     console.log(this);
// }
// const miFuncion = () => {console.log(this)}

// // miFuncion();
// objeto.otraFuncion();

// if (false) {
//     variable;
// } else {
//     let variable;
// }

// let operacion = {
//     nombre: 'contar-funcion',
//     contar(params) {
//         console.log(this);
//     }
// }

// operacion.contar(0);

// function contar(params) {
//     console.log(this);
//     // var terceraVariable;
//     // console.log(this.variable);
//     // let nan = NaN;
//     // console.log(typeof(nan));
//     // console.log(typeof(this.variable));
//     // console.log(window.variable)
//     // this.variable++;

//     // setTimeout(() => {
//     //     window.close();
//     // }, 5000);
// }
// contar(0);

// let variable;
// variable = 1;

// var otraVariable;

/*
(function name(params, repeticiones) {
    // alert('ALERT ' + params)
    let i = 0;
    while (i < repeticiones) {
        console.log('hola ' + params);
        i++;
    }
})('Alexander', 5)
*/
//--------------------------------------------------------------


// document.getElementById("boton").addEventListener("click", saludar('Alexander'));

// document.getElementById('boton').addEventListener('click',function() {
//     saludar('Alexander')
// });


// document.getElementById("cambio").addEventListener("click", () => {
//     document.getElementById("boton").removeEventListener();
// });


// document.getElementById("boton").addEventListener("click", () => {
//     saludar("¡Hola desde addEventListener!");
// });

// function saludar(nombre) {
//     console.log('Holaaa ' + nombre);
// }

// function despedir() {
//     console.log('chauuuu');
// }