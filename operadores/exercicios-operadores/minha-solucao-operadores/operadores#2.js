/* 2° exercício.
------------------------------------------------------------------------------------
* Crie uma variável numérica com um valor. 
    Utilize um operador ternário para verificar se esse valor é par ou ímpar. 
    Exiba o resultado no console.

------------------------------------------------------------------------------------
*/
let numero = 2;

const numeroPar = numero % 2 === 0
    ? `O número ${numero} é par!` 
    : `O número ${numero} é impar!`

console.log(numeroPar);