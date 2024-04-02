import readline = require("readline-sync");
// //Arrow functions 
// //Nesta primeira versao do codigo, snao foram utilizadas as Arrow functions
// let numerosArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // console.log("exibir itens")
// // for ( let numero of numerosArray){
// //     console.log(numero) 
// // }
// console.log("exibir itens somados com eles mesmo\n")

// numerosArray.forEach(numero => console.log(numero) )



let numero1: number = readline.questionFloat("Digite o primeiro numero: ");
let numero2: number = readline.questionFloat("Digite o segundo numero: ");



let somar = function(numero1: number, numero2: number): number {
    return numero1 + numero2;
};
console.log("Resultado da soma: ", somar(numero1, numero2));
