/* 1° exercício.
------------------------------------------------------------------------------------
* Um array esparso é um tipo de array no qual a maioria dos elementos 
    tem valores indefinidos. Crie um array esparso e atribua valores a 
    alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). 
    Imprima no console o array e também a informação de comprimento do array.

------------------------------------------------------------------------------------
*/

const elementos = [];
elementos[1] = 2;
elementos[3] = 4;
elementos[7] = 8;

console.log(elementos);
console.log(`O tamanho do array elementos é ${elementos.length}`);

