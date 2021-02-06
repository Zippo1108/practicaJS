//Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let numero = parseInt(prompt("Seleccione un numero"));
if((numero % 2 == 0) || (numero % 3 == 0) || (numero % 5 == 0) || (numero % 7 == 0)){
    document.write("El numero es divisible en 2, 3, 5 o 7");
}else{
    document.write("El numero seleccionado no es divisible en 2, 3, 5 o 7");
}