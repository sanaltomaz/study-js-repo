/* 2° exercício.
------------------------------------------------------------------------------------
* Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade 
    (idade >= 18). Imprima o resultado no console.
    
------------------------------------------------------------------------------------
*/

let idade = 10;

function verificarIdade (idade = 0) {
    if (idade <= 0) {
        return console.log("Idade invalida, tente novamente.");
    }

    if (idade >= 18) {
        return console.log("Pessoa maior de idade, já pode beber.");
    } else {
        return console.log("Pessoa menor de idade, não pode beber.");
    }
}

verificarIdade(); // Idade invalida, tente novamente.
verificarIdade(idade); // Pessoa menor de idade, não pode beber.
verificarIdade(20); // Pessoa maior de idade, já pode beber.