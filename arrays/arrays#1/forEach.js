/* 
MÉTODO FOREACH

------------------------------------------------------------------------------------
O método **forEach** é utilizado para executar uma função de retorno (callback) para cada elemento de um array.
Diferente de outros métodos de array, o **forEach** não retorna um novo array ou qualquer outro valor.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(num) {
    console.log(num);
});
// Resultado: 1 2 3 4 5

/* 
EXPLICAÇÃO:
1. Criamos um array chamado **numeros** com cinco elementos: 1, 2, 3, 4 e 5.
2. O método **forEach** é chamado no array **numeros**, passando uma função de retorno (callback) como argumento.
3. Essa função de retorno recebe um elemento do array (**num**) e imprime esse elemento no console.
4. O método **forEach** executa a função de retorno uma vez para cada elemento do array.

------------------------------------------------------------------------------------
EXEMPLO COM FUNÇÃO SETA (ARROW FUNCTION):
*/
numeros.forEach(num => console.log(num * 2));
// Resultado: 2 4 6 8 10

/* 
EXPLICAÇÃO:
1. O mesmo array **numeros** é usado.
2. O método **forEach** é chamado no array **numeros**, passando uma função seta (arrow function) como argumento.
3. A função seta recebe um elemento do array (**num**) e imprime o dobro desse elemento no console.
4. O método **forEach** executa a função de retorno uma vez para cada elemento do array.

------------------------------------------------------------------------------------
EXEMPLO COM OBJETOS:
*/
let pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 28 }
];

pessoas.forEach(function(pessoa) {
    console.log(pessoa.nome);
});
// Resultado: Ana João Maria

/* 
EXPLICAÇÃO:
1. Criamos um array de objetos chamado **pessoas**, onde cada objeto representa uma 
   pessoa com propriedades **nome** e **idade**.
2. O método **forEach** é chamado no array **pessoas**, passando uma função de retorno (callback) como argumento.
3. Essa função de retorno recebe um objeto do array (**pessoa**) e imprime o valor da 
   propriedade **nome** desse objeto no console.
4. O método **forEach** executa a função de retorno uma vez para cada objeto do array.

------------------------------------------------------------------------------------
EXEMPLO COM FUNÇÃO SETA E ÍNDICES:
*/
pessoas.forEach((pessoa, indice) => {
    console.log(`Pessoa ${indice + 1}: ${pessoa.nome}`);
});
// Resultado: 
// Pessoa 1: Ana
// Pessoa 2: João
// Pessoa 3: Maria

/* 
EXPLICAÇÃO:
1. O mesmo array **pessoas** é usado.
2. O método **forEach** é chamado no array **pessoas**, passando uma função seta (arrow function) como argumento.
3. A função seta recebe dois parâmetros: o objeto atual (**pessoa**) e o índice do objeto no array (**indice**).
4. A função seta imprime a pessoa e seu índice incrementado em 1 no console.
5. O método **forEach** executa a função de retorno uma vez para cada objeto do array.

------------------------------------------------------------------------------------
DICAS IMPORTANTES:
1. O método **forEach** não altera o array original, ele apenas executa a função de retorno 
   para cada elemento do array.
2. A função de retorno (callback) passada ao **forEach** pode receber três argumentos: 
   o elemento atual, o índice do elemento e o array original.
3. Use **forEach** quando quiser executar uma ação para cada elemento do array, 
   mas não precisar retornar um novo array ou valor.

------------------------------------------------------------------------------------
CONCLUSÃO:
O método **forEach** é uma ferramenta poderosa e flexível para iterar sobre elementos de arrays em JavaScript, 
permitindo a execução de uma função de retorno para cada elemento do array original.

*/