/*Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.*/

alert ("Iremos fazer algumas operações matemáticas");
let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digite o segundo número");

numberOne = Number(numberOne);
numberTwo = Number(numberTwo);

let sum = numberOne + numberTwo
let subtration = numberOne - numberTwo
let multipication = numberOne * numberTwo
let division = numberOne / numberTwo
let restDiv = numberOne % numberTwo


alert ("Resultado da soma é: " + sum)
alert ("Resultado da subtração é: " + subtration)
alert ("Resultado da multiplicação é: " + multipication)
alert ("Resultado da divisão é: " + division)
alert ("O resto da divisão é: " + restDiv)


if(restDiv%2 == 0){
    alert("A soma é Par");
} else {
    alert("A soma é Impar");
};

if (numberOne === numberTwo) {
    alert ("Os números são iguais")
} else {
    alert ("Os números são diferentes")
}