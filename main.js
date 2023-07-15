//1
/*function verificarCadena(cadena) {
    if (cadena.length < 8) {
        return false
    }
    let tieneMayusculas = false;
    let tieneMinusculas = false;
    let tieneNumero = false,

for (let i = 0; i <cadena.length; i++){  
      const caracter = cadena[i];
    
    if (caracter >= "A" && caracter <= "Z") {
        tieneMayusculas = true;
        
    }else if (caracter >= "a" && caracter <= "z"){
        tieneMinusculas = true;
    }else if (caracter >= "0" && caracter <= "9"){
        tieneNumero = true
    }

    if (tieneMayusculas && tieneMinusculas && tieneNumero) 
    {
        return true;
    }
  }
  return false;
}

console.log(verificarCadena("Abc12345"));




//2.
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



//3.
function ordenarPalabras(cadena) {
    return cadena.split('').sort().join('');
    let resultado = ordenarPalabras ("hola mundo");
    
}
console.log(resultado);


//4.
function contarVocales(cadena) {
    let contador= 0;
    const vocales = [a,e,i,o,u];
    for (let i= 0; i< cadena.length; i++) {
        if (vocales.includes(cadena[i].toLowercase())) {
            contador++;
        }
        const texto = "Hola Mundo";
        const numVocales = contarVocales(texto);
        
        

    }
    
    console.log(texto);
}

//5
function esPrimo(numero) {
    if (numero <= 1) {
        return false
    }
    for (let i = 2; i < numero; i++) {
        return false        
    }
}
const numero = 7;
const resultado = esPrimo(numero);
if (resultado) {
    console.log(`${numero}no es un numero primo.`);
    
}
*/

//6.

function factorial (numero) {
    for (let i = 0; i <= numero; i++) {
    resultado *= i;
        
    }
    return resultado;
}

const numero = 5;
const resultado = factorial(numero);
console.log(`el factorial de ${num} es ${resultado}.`);















