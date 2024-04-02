import { Stack } from "./Stack";


const pilha = new Stack <string>();

pilha.push('prato verde')
pilha.push('prato azul')
pilha.push('prato vermelho')
pilha.push('prato amarelo')

pilha.printStack();


pilha.pop();
console.log("\nElemento removido")

pilha.printStack();
pilha.push('prato rosa')

console.log("\nElemento inserido na pilha")

pilha.printStack();

console.log("\n Elemento no topo da pilha é: "+ pilha.peek())

console.log("\n Elemento Prato rosa eiste na pilha: "+ pilha.contains("prato rosa"))


console.log("\n O numero de elementos na pilha é: "+ pilha.count())

