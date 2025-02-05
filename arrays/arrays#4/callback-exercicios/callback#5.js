/* 5° exercício.
------------------------------------------------------------------------------------
* Considere um array de números inteiros.

const numeros = [6, 9, 12, 15, 18, 21];
  Copiar código
  Utilize o método forEach() para multiplicar cada elemento do array por 3 
  e exibir no console o resultado de cada multiplicação. 
  Depois, utilize o método findIndex() para encontrar o índice do 
  número 18 no array original.

------------------------------------------------------------------------------------
*/
const numeros = [6, 9, 12, 15, 18, 21];

const multiplicados = numeros.map(numero => numero * 3);

const indiceDe18 = numeros.findIndex(numero => numero === 18);

console.log("Array original: ", numeros);
console.log("Array multiplicado: ", multiplicados);
console.log("Índice do número 18: ", indiceDe18);

// Não consegui usar o forEach() para realizar a operação,
// Ele simplismente não retorna nada. [undefined]

