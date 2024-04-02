import readline = require("readline-sync");
import { Queue } from "./Queue";
const fila: Queue<string> = new Queue()
export function main(){
let opcao: number;
let nome: string;









while(true){

console.log('**************************************************')
console.log("1 - Adicionar Cliente na Fila")
console.log("2 - Listar todos os Clientes")
console.log("3 - Retirar Cliente da Fila")
console.log("0 - Sair")
console.log('**************************************************')

console.log("Entre com a Opção desejada")
opcao = readline.questionInt('')
if (opcao == 0) {
    console.log("\nSaia do Programa Agora!");
    sobre();
    process.exit(0);
}
switch(opcao){
    case 1:
        console.log("Digite o nome do cliente")
        nome = readline.question("")
        fila.enqueue(nome)

        console.log(`Cliente ${nome} adicionado a fila`)

        keyPress()
    break;
    case 2:
        console.log(`Lista de Clientes na Fila: `)
        fila.printQueue()
        keyPress()
     break;
    case 3:
        console.log(`Remover Cliente da Fila: `)
        fila.dequeue()
        console.log(`O Cliente foi Chamado! `)

        keyPress()
     break;
}
}
}
export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Christian felipi");
    console.log("Chrstian Alvim - https://github.com/christianfelps");
    console.log("https://github.com/christianfelps");
    console.log("*****************************************************");
}
function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readline.prompt();
}

main()