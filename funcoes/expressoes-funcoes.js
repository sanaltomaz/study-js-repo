/* 
EXPRESSÕES DE FUNÇÃO

------------------------------------------------------------------------------------
Uma expressão de função é quando uma função é atribuída a uma variável ou constante.
Diferente das funções declaradas, **elas não possuem nome obrigatório** e 
não são "hoisted", ou seja, só podem ser usadas após serem definidas.

Expressões de função são frequentemente usadas em:
1. Funções anônimas.
2. Callbacks.
3. Contextos onde a função será utilizada como valor.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
const saudacao = function () {
    return "Olá, mundo!";
};

console.log(saudacao()); 
// Resultado: "Olá, mundo!"

/* 
EXPLICAÇÃO:
1. A função foi atribuída à constante **saudacao**.
2. Não possui nome explícito (é uma função anônima).
3. Para chamar a função, utilizamos o nome da variável ou constante à qual ela foi atribuída.

------------------------------------------------------------------------------------
EXEMPLO COM PARÂMETROS:
*/
const soma = function (a, b) {
    return a + b;
};

console.log(soma(5, 3)); 
// Resultado: 8

console.log(soma(10, 20)); 
// Resultado: 30

// EXPLICAÇÃO:
// A função anônima recebe dois parâmetros (**a** e **b**) e retorna a soma deles.
// Como a função está armazenada na constante **soma**, utilizamos esse nome para chamá-la.

/* 
------------------------------------------------------------------------------------
EXPRESSÕES DE FUNÇÃO NOMEADAS:
Embora opcional, uma expressão de função pode ter um nome. 
Esse nome é usado apenas no contexto interno da própria função.
*/
const fatorial = function calcFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcFatorial(n - 1); // O nome **calcFatorial** é usado aqui.
};

console.log(fatorial(5)); 
// Resultado: 120

// console.log
