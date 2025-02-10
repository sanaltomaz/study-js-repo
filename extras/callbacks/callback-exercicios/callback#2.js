/* 2° exercício.
------------------------------------------------------------------------------------
* Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: 
  um array e uma função de callback que executa alguma operação matemática. 
  Essa função deve iterar por cada elemento do array e aplicar a função de 
  callback em cada um dos elementos, imprimindo o resultado da operação no console.

------------------------------------------------------------------------------------
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let operacaoNumeros = numeros.map(num => num * 2)
console.log(`Numeros originais: ${numeros}`);
console.log(`Numeros multiplicados: ${operacaoNumeros}`);
