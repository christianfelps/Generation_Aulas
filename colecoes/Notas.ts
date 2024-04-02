const notas: Array<number> = new Array<number>(7.0, 5.0, 4.0, 10.0);

notas.push(4.0);

notas.unshift(2.5, 9.0);

console.table(notas)

// console.log('\n O indice da nota 2.5 é: ' + notas.indexOf(2.5));

// console.log('\nA nota 2.5 está cadastrada no Array notas:' + notas.includes(2.5));

console.log(notas[notas.indexOf(7.0)])

// // .pop() exclui o ultimo item do array
// notas.pop()
// notas.shift()
// // passo o valor com o .indexOf() e apos quantos valores quero apagar
// notas.splice(notas.indexOf(2.5), 1);

// console.table(notas)
// console.log(notas.pop(), notas.shift())
