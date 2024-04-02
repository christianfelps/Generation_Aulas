import readline = require("readline-sync");
import { Stack } from "./Stack";

export function main(){

    const pilha: Stack<string> = new Stack();

    let opcao: number;
    let nome: string;
    
    
    
    
    
    
    
    
    
    while(true){
    
    console.log('**************************************************')
    console.log("1 - Adicionar Livro na Pilha")
    console.log("2 - Listar todos os livros")
    console.log("3 - Retirar Livro da pilha")
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
            console.log("Digite o nome do livro a ser adicionado")
            nome = readline.question("")
           pilha.push(nome);
    
            console.log(`Livro ${nome} adicionado a pilha`)
    
            keyPress()
        break;
        case 2:
            console.log(`Lista de Livros na Pilha: `)
            pilha.printStack()
            keyPress()
         break;
        case 3:
            console.log(`Remover livro da pilha: `)
            pilha.pop()
            console.log(`Um Livro foi retirado da pilha!  `)
    
            keyPress()
        
            
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
