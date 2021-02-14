//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible
let num = parseInt(prompt('Ingrese un numero'));
if((num % 2) == 0){
    document.write('Divisible por 2');
} else if((num % 3) == 0){
    document.write('Divisble por 3');
} else if ((num % 5) == 0){
    document.write('Divisble por 5');
} else if ((num % 7) == 0){
    document.write('Divisble por 7');
}