/* 4° exercício.
------------------------------------------------------------------------------------
* Crie uma função que receba três números como parâmetros e determine qual é o maior 
    entre eles. Utilize estruturas condicionais (if, else) para comparar os valores 
    e determinar o maior. 
    Imprima o maior valor no console.

------------------------------------------------------------------------------------
*/

let a = 12;
let b = 5;
let c = 5;

function verificarMaiorNumero(a, b, c) {
    let maiorNumero = 0;
    if (a > b && a > c) {
        maiorNumero = a
    } else if (b > a && b > c) {
        maiorNumero = b
    } else {
        maiorNumero = c
    }

    return maiorNumero;
};
console.log(`O maior número é ${verificarMaiorNumero(a,b,c)}`);
