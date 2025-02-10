/* 5° exercício.
------------------------------------------------------------------------------------
* Crie um programa que utilize um laço for para percorrer uma 
    array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] 
    e exibir no console apenas os números pares contidos nesse array.

------------------------------------------------------------------------------------
*/
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let numerosPares = []
for (let i = 0; i < numeros.length; i++) {
    const elementoPar = numeros.filter(num => num % 2 === 0);
    numerosPares = elementoPar
}
console.log(`Numeros pares da lista: ${numerosPares}`);
