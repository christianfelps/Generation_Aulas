import { match } from 'assert';
import readline = require('readline-sync');

let numero1: number;
let numero2: number;

numero1 = readline.questionFloat('Digite o Primeiro numero');
numero2 = readline.questionFloat('Digite o Segundo numero');

console.log(somar(numero1, numero2));
console.log(subtrair(numero1, numero2));
console.log(multiplacar(numero1, numero2));
let divisao = dividir(numero1, numero2)
if(dividir(numero1, numero2))
console.log("Dividir:" + divisao)
else
console.log("Nao existe divisao por 0")

console.log(raiz(9))
about();

// Funcao com retorno
function somar(num1: number, num2: number):number{
    return num1 + num2;
}
function subtrair(num1: number, num2: number):number{
    return num1 - num2;
}
function multiplacar(num1: number, num2: number):number{
    return num1 * num2;
}
function dividir(num1: number, num2: number):number | null{
let divisao = num1 / num2;
    return(divisao != Infinity ? divisao : null);
}
function raiz(num1: number):number | null{
    return  Math.sqrt(num1)
   
}
    




//Funcao sem retorno
function about(): void{
    console.log('Feito por Christian');
}