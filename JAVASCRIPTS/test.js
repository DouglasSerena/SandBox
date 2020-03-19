var contador = 1;
var valor1
var valor2

valor1 = prompt("digite um valor qualquer");
valor2 = prompt("digite um mutiplicador do primeiro valor");
contadorV = prompt("coloque um valor para mutiplicar o mesmo valor")

while (contador < contadorV) {
    valor1 = valor1 * valor2
    alert("o resultado da mutiplicação foi de "+valor1);
    contador = contador - 1;
}