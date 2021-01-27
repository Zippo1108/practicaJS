// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let num1 = parseInt(prompt("Elija el primer numero"));
let num2 = parseInt(prompt("Elija el segundo numero"));
let num3 = parseInt(prompt("Elija el tercer numero"));
if (num1 > num2 && num1 > num3){
    document.write("El primer numero es el mayor: " + num1);
} else if ( num2 > num1 && num2 > num3){
    document.write("El segundo numero es el mayor: " + num2);
} else{
    document.write("el tercer numero es el mayor " + num3);
}