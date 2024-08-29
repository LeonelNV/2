//2 - Reversion de cadena
function revertirCadena(cadena){
    return cadena.split(" ").reverse().join(" ");
 }
 let frase = "Esto es una frase al reves";
 console.log("Frase convertida al revez: ", revertirCadena(frase));