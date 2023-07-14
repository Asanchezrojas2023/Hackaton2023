
2.
function encontrarNumerosFaltantes(arr) {
    let numerosFaltantes = [];
    let resultado = encontrarNumerosFaltantes([1, 3, 4, 7]);
    for (let i = 0; i < arr.length - 1; i++) {
        let diferencia = arr[i + 1] - arr[i];
        if (diferencia > 1) {
            for (let j = 1; j < diferencia; j++) {
                numerosFaltantes.push(arr[i] + j);
            }
        }
    }
    return numerosFaltantes;
}
console.log(resultado);

/*3.
function ordenarPalabras(cadena) {
    return cadena.split('').sort().join('');
    let resultado =ordenarPalabras ("hola mundo");
    console.log(resultado);
}
/*
