/* 6° exercício.
------------------------------------------------------------------------------------
* Crie um programa que calcule a média dos números presentes 
    em um array utilizando um loop for.

------------------------------------------------------------------------------------
*/
const notas = [8, 6 , 10, 7];
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas = somaNotas + notas[i];
};

const mediaNotas = somaNotas / notas.length;
console.log(`A médias das notas é ${mediaNotas}`);
