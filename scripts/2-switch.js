

const temperatura = document.getElementById('temperatura');
const btn = document.getElementById('btn');
const conversion = document.getElementById('conversion');
const resultado = document.getElementById('resultado');


btn.addEventListener('click', convertir)

function convertir() {
    let valorInput = temperatura.value * 1;
    console.log(conversion.value);
    let resultadoVariable = 0;
    switch (conversion.value) {
        case 'c-f':
            console.log(valorInput);
            resultadoVariable = 1.8 * (valorInput) + 32
            break;

        case 'f-c':
            resultadoVariable = 5 / 9 * (valorInput) - 32
            break;

        case 'c-k':
            resultadoVariable = (valorInput) + 273
            break;

        case 'k-c':
            resultadoVariable = (valorInput) - 273
            break;

        default:
            break;
    }

    // console.log(typeof valorInput);
    resultado.innerText = resultadoVariable;
}
