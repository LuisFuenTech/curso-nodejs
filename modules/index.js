/*
Esta línea me permite crear una constante para guardar todas las funciones
y objetos de mi archivo operaciones.js. Cuando coloco './' le indico que
ese archivo está en la misma carpeta de index.js. En caso contrario, debo colocar la ruta 
del archivo que exportaré.
*/
const math = require('./operaciones.js');

console.log(math);

console.log(math.eSumar(10,5));
console.log(math.eRestar(10,5));
console.log(math.eMultiplicar(10,5));
console.log(math.eDividir(10,5));
console.log(math.eDividir(10,0));