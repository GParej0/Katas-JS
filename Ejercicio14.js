//! Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
function repeatCounter(param) {
    const result = {};
    for (let i = 0; i < param.length; i++) {
        const element = param[i];
        if(result[element]){
            result[element] += 1;
        } else {
        result[element] = 1;
    }
}
const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
function repeatCounter(param) {
    const result = {};
    for (let i = 0; i < param.length; i++) {
        const element = param[i];
        if(result[element]){
            result[element] += 1;
        } else {
        result[element] = 1;
    }
}}

    return result;
}

console.log(repeatCounter(counterWords));

