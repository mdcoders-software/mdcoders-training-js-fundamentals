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

let registro = ``;
let usuarioLista = [];

window.onload = () => {
    validarStorage();

}
function validarStorage() {

    const data = localStorage.getItem('usuarioLista');
    const parsedata = JSON.parse(data);
    // console.log(data.length);
    // console.log(parsedata.length);
    // if (parsedata != null && parsedata.length > 0)
    // if (parsedata && parsedata.length )
    if (parsedata?.length) {  //optional chaining
        console.log('no hay data');
        usuarioLista = [...parsedata];
        console.log(usuarioLista);
        generarTabla();
    }


    // let a = null;
    // if (a?.length) {
    // console.log('Truthy');
    // } else {
    // console.log('Falsy');
    // }
    // console.log(data);
    // console.log(parsedata);

    // let b = NaN
    // console.log(!!b); // 

    // let c = a ?? [2, 3]; // Nullish Coalescing
    // if (c.length) {
    // console.log(c);
    // }
}

registrar.addEventListener('click', e => {
    e.preventDefault();
    // const isValid = validarCampos();
    if (validarCampos()) {

        const objUsuario = {
            nombre: nombre.value,
            apellido: apellido.value,
            correo: correo.value
        }
        usuarioLista.push(objUsuario);

        // usuarioLista.push({
        // nombre: nombre.value,
        // apellido: apellido.value,
        // correo: correo.value
        // })

        generarTabla()

        // sessionStorage.setItem('usuarioLista', JSON.stringify(usuarioLista));
        localStorage.setItem('usuarioLista', JSON.stringify(usuarioLista));
    }

});

function generarTabla() {
    registro = '';
    usuarioLista.forEach((usuario) => {
        registro += `
    <tr>
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.correo}</td>
    </tr>
`
    })
    console.log(registro);
    let table = `
        <table>
        <thead>
        <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Correo</th>
        </tr>
        </thead>
        <tbody>
        ${registro}
        </tbody>
        </table>
        `;
    console.log(table);
    listado.innerHTML = table;
    borrarCampos();
}

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