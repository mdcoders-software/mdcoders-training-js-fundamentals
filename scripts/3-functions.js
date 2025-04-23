const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const registrar = document.getElementById('registrar');
const listado = document.getElementById('listado');
const limpiar = document.getElementById('limpiar');
const errorNombre = document.getElementById('error_nombre');
const errorApellido = document.getElementById('error_apellido');
const errorCorreo = document.getElementById('error_correo');


let registro = '';

registrar.addEventListener('click', e => {
    registro += `${nombre.value}  
    ${apellido.value} 
    ${correo.value}`
    listado.innerHTML = registro
    // listado.appendChild(registro)
    // console.log(listado.textContent);

    validarCampos();
    borrarCampos();

})

limpiar.addEventListener('click', () => {
    borrarCampos();

})

function borrarCampos() {
    nombre.value = '';
    apellido.value = '';
    correo.value = ''
}

function validarCampos() {
    // if (nombre.value.length == 0) console.log('Ingrese el nombre ');
    // if (apellido.value.length == 0) console.log('Ingrese el apellido ');

    if (nombre.value.length == 0) {
        errorNombre.style.display = 'inline';
        nombre.style.borderColor = 'red'
    }

    if (apellido.value.length == 0) {
        errorApellido.style.display = 'inline';
        apellido.style.borderColor = 'red'
    }

    if (correo.value.length == 0) {
        errorCorreo.style.display = 'inline';
        correo.style.borderColor = 'red'
    }


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