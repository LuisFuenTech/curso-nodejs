//Crear un objeto
const Math = {};

function sumar(num1, num2){
    console.log('La suma de', num1, 'y', num2, 'es', num1+num2);
    return num1 + num2;
}

function restar(num1, num2){
    console.log('La resta de', num1, 'y', num2, 'es', num1-num2);
    return num1 - num2;
}

function multiplicar(num1, num2){
    console.log('El producto de', num1, 'y', num2, 'es', num1*num2);
    return num1 * num2;
}

function dividir(num1, num2){
    if(!num2 == 0){
        console.log('La división de', num1, 'y', num2, 'es', num1/num2);
        return num1 / num2;
    }
    else
        console.log('No se puede dividir entre 0')
}

//Asignarle al objeto las funciones de este archivo para exportar.
Math.eSumar = sumar;
Math.eRestar = restar;
Math.eDividir = dividir;
Math.eMultiplicar = multiplicar;

/*Es necesario exportar las funciones como objetos para otros archivos.
Para ello se usa 'exports.nombreVariable = funcionActual'.
La siguiente líne indica que desde otro archivo debo llamar a la funcion
eSumar, y cuando lo haga le estaré pasando la funcion sumar de este archivo
*/
exports.eSumar = sumar;
exports.eRestar = restar;
exports.eMultiplicar = multiplicar;
exports.eDividir = dividir;

/*
Forma más elocuente y bella de exportar objetos y otra cosa es:
module.export = objeto/funcion/variable
*/
module.export = Math;