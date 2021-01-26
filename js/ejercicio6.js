//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = parseInt(prompt("Elija el primer numero"));
let num2 = parseInt(prompt("Elija el segundo numero"));
if (num1 > num2) {
    document.write("El numero " + num1 + " es mayor");
}else if (num1 < num2) {
    document.write("El numero " + num2 + " es mayor");
 } else { 
     document.write("Los numeros son iguales");
 }