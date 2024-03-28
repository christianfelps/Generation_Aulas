import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";


let t1: Transporte = new Transporte(6);

// t1.capacidade = 4
// console.log('A capacidade do meio de Transpote e '+ t1.capacidade);
// let ter1: Terrestre = new Terrestre(5, 4, 60);
// ter1.visualizar()
// t1.visualizar()
let aut1: Automovel = new Automovel(5,4,800,"branco", 4,"76l4", 6,)
console.log(aut1.calcularIpva(1900))
aut1.visualizar()