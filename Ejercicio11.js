//! Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. 

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let total = 0;
    for(let i = 0; i < param.length; i++){
        let valor = param[i];
        if(typeof valor === "number"){
            total += valor;
        } else if (typeof valor === "string"){
            total += valor.length;
        }
    } return total / param.length
}

console.log(averageWord(mixedElements));