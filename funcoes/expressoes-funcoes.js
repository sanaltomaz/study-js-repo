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

console.log(soma(100, 200));
// Resultado: 300

/* 
EXPLICAÇÃO:
1. A função anônima **soma** recebe dois parâmetros (**a** e **b**).
2. Ela retorna a soma dos parâmetros.
3. Para chamar a função, usamos o nome da constante **soma**.
4. Você pode passar quaisquer valores como parâmetros ao chamar a função.

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

console.log(fatorial(3)); 
// Resultado: 6

console.log(fatorial(7)); 
// Resultado: 5040

/* 
EXPLICAÇÃO:
1. A função anônima nomeada **calcFatorial** é atribuída à constante **fatorial**.
2. **calcFatorial** é usada para calcular o fatorial de um número.
3. Dentro da própria função, **calcFatorial** é usada para chamadas recursivas.
4. Funções nomeadas ajudam na depuração e no entendimento do código, já que o nome da função aparece em stack traces.

------------------------------------------------------------------------------------
CONCLUSÃO:
Expressões de função são uma maneira flexível e poderosa de definir funções em JavaScript.
Podem ser anônimas ou nomeadas e são ideais para situações onde você deseja passar funções como valores ou criar funções no local onde serão usadas.
*/
