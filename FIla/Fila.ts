import { Queue } from "./Queue";

let fila: Queue<number> = new Queue()

let numero: number = 0

fila.enqueue(numero)

fila.enqueue(++numero)

fila.enqueue(++numero)

fila.enqueue(++numero)

fila.printQueue()

console.log('\n Elementos que contem na fila:', fila.count())
fila.dequeue()

console.log('O elemento 1 contem na fila?', fila.contains(1))
fila.printQueue()
console.log('\n Elementos que contem na fila:', fila.count())
console.log(fila.peek())

console.log("A fila esta vazia? ",fila.isEmpty())
console.log('limpando a fila ',) 
fila.clear()
console.log("A fila esta vazia? ",fila.isEmpty())
