let palavra = "luan santana";
let vogais = ['a', 'e', 'i', 'o', 'u'];
let palavraMinuscula = palavra.toLowerCase();

let caracteres = palavraMinuscula.split('');
let vogaisEncontradas = caracteres.filter(letra => vogais.includes(letra));
let numeroVogais = palavra;
let numero = vogaisEncontradas.length;

console.log("Texto: " + palavra);
console.log("Número totais de vogais: " + numero);
console.log("Vogais encontradas: " + vogaisEncontradas.join(", "));