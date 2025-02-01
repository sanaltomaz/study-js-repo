/* 1° exercício.
------------------------------------------------------------------------------------
* Crie uma função que receba o nome de uma pessoa como argumento e retorne uma 
    saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

------------------------------------------------------------------------------------
*/ 
// Nota: exercicio já resolvido no funcoes-declaradas.js
let nome = "João";

function Saudacao (nome = "Visitante"){
    return console.log(`Ola ${nome}, seja bem vindo.`);
}

Saudacao(nome);
// Ola João, seja bem vindo.
Saudacao();
// Ola Visitante, seja bem vindo.