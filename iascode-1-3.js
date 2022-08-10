/* 
IASCODE 1 - problema 3 - encuentra la cantidad maxima de dinero 

Args:
    antennas (array[number]): Array de números enteros positivos con dólares por día 

Returns:
    number: Numero entero con el ahorro máximo 
*/
function maximumSavings(antennas) {
    // ¡Tu código va aquí! <----------------------------------------
    for (let i = 0; i < antennas.length; i++) {
        antennas[i] +=
            (antennas[i - 3] | 0) > (antennas[i - 2] | 0)
                ? antennas[i - 3] | 0
                : antennas[i - 2] | 0;
    }
    return (antennas[antennas.length - 1] | 0) >
        (antennas[antennas.length - 2] | 0)
        ? antennas[antennas.length - 1] | 0
        : antennas[antennas.length - 2] | 0;
}

/* 
No tocar, este handler le entrega a maximumSavings los valores de entrada
*/
const antennas = [14, 65, 18, 54, 5, 19, 10];


function handler() {
    // ¡No tocar!
    const result = maximumSavings(antennas)
    return result
}
result = handler() // ¡No tocar!

console.log(result);