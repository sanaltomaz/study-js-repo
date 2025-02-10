/* 3° exercício.
------------------------------------------------------------------------------------
* Crie uma função que receba uma array de números inteiros 
    e retorne a soma dos elementos.

------------------------------------------------------------------------------------
*/
const numerosInteiros = [10, 2, 3, 4, 5, 6, 7]
const somaElementos = numerosInteiros.reduce((acumulador, atual) => acumulador + atual, 0);

console.log(somaElementos);
