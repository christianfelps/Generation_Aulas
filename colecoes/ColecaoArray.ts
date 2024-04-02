
const numero: Array<number> =  new Array<number>();
// adiciona um de cada vez por ordem
numero.push(1);
numero.push(5);
numero.push(7);
numero.push(1);

//adiciona no comeco da colecao
numero.unshift(2.5, 4.5);

console.table(numero);
// para achar a pocisao do valor do array
console.log('A posicao do elemento 5 e ' + numero.indexOf(5));

// para saber se o elemento existe dentro do array
console.log('O elemento 7 existe? ' + numero.includes(7));

// Podemos atualizar um dado de um elemento
numero[numero.indexOf(7)] = 10;

console.table(numero)

// Apagar Um elemento do Array
// primeiro Parametro e indice do elemento
//Segunndo parametro e quantos elementos vc deseja apagar a partir do indice
numero.splice(numero.indexOf(10),1)

console.table(numero)

