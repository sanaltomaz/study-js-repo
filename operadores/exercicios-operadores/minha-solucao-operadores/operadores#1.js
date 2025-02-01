/* 1° exercício.
------------------------------------------------------------------------------------
* Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma 
    conta bancária, depois realize operações de adição e subtração entre eles 
    utilizando uma variável chamada operacao, considerando a função de cada variável 
    criada anteriormente. 
    Exiba os resultados finais no console.

------------------------------------------------------------------------------------
*/
// Criando as variaveis
let saldo = 2000;
let deposito = 300;
let saque = 820;

// Logicas de Saque e Deposito
const operacaoSaque = saque <= saldo
    ? (saldo -= saque, "Saque realizado com sucesso!") 
    : "Saque reprovado;";

const operacaoDeposito = deposito > 0 
    ? (saldo += deposito, "Deposito realizado com sucesso!") 
    : "Deposito invalido";

// Imprindo os resultados
console.log(operacaoDeposito);
console.log(operacaoSaque);