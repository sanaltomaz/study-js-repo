/* 
MÉTODO FILTER

------------------------------------------------------------------------------------
O método **filter** é utilizado para criar um novo array a partir de um array existente, 
chamando uma função de retorno (callback) para cada elemento do array original.
Somente os elementos que retornarem `true` na função de retorno serão incluídos no novo array.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosPares = numeros.filter(function(num) {
    return num % 2 === 0;
});

console.log(numerosPares); 
// Resultado: [2, 4, 6, 8, 10]

/* 
EXPLICAÇÃO:
1. Criamos um array chamado **numeros** com dez elementos: 1, 2, 3, 4, 5, 6, 7, 8, 9 e 10.
2. O método **filter** é chamado no array **numeros**, passando uma função de retorno (callback) como argumento.
3. Essa função de retorno recebe um elemento do array (**num**) e retorna `true` se o elemento for par.
4. O método **filter** cria um novo array (**numerosPares**) que contém apenas os elementos 
   para os quais a função de retorno retornou `true`.

------------------------------------------------------------------------------------
EXEMPLO COM FUNÇÃO SETA (ARROW FUNCTION):
*/
let numerosImpares = numeros.filter(num => num % 2 !== 0);

console.log(numerosImpares); 
// Resultado: [1, 3, 5, 7, 9]

/* 
EXPLICAÇÃO:
1. O mesmo array **numeros** é usado.
2. O método **filter** é chamado no array **numeros**, passando uma função seta (arrow function) como argumento.
3. A função seta recebe um elemento do array (**num**) e retorna `true` se o elemento for ímpar.
4. O método **filter** cria um novo array (**numerosImpares**) que contém apenas os 
   elementos para os quais a função seta retornou `true`.

------------------------------------------------------------------------------------
EXEMPLO COM OBJETOS:
*/
let pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 28 },
    { nome: "Carlos", idade: 17 },
    { nome: "Beatriz", idade: 22 }
];

let pessoasAdultas = pessoas.filter(function(pessoa) {
    return pessoa.idade >= 18;
});

console.log(pessoasAdultas); 
// Resultado: [{ nome: "Ana", idade: 25 }, { nome: "João", idade: 30 }, { nome: "Maria", idade: 28 }, { nome: "Beatriz", idade: 22 }]

/* 
EXPLICAÇÃO:
1. Criamos um array de objetos chamado **pessoas**, onde cada objeto representa uma 
   pessoa com propriedades **nome** e **idade**.
2. O método **filter** é chamado no array **pessoas**, passando uma função de retorno (callback) como argumento.
3. Essa função de retorno recebe um objeto do array (**pessoa**) e retorna `true` se 
   a propriedade **idade** for maior ou igual a 18.
4. O método **filter** cria um novo array (**pessoasAdultas**) que contém apenas os 
   objetos para os quais a função de retorno retornou `true`.

------------------------------------------------------------------------------------
EXEMPLO COM FILTROS MAIS COMPLEXOS:
*/
let produtos = [
    { nome: "Laptop", preco: 3000, estoque: 5 },
    { nome: "Mouse", preco: 50, estoque: 100 },
    { nome: "Teclado", preco: 150, estoque: 50 },
    { nome: "Monitor", preco: 800, estoque: 20 },
    { nome: "Cadeira", preco: 600, estoque: 0 }
];

let produtosDisponiveis = produtos.filter(function(produto) {
    return produto.estoque > 0 && produto.preco <= 1000;
});

console.log(produtosDisponiveis); 
// Resultado: [{ nome: "Mouse", preco: 50, estoque: 100 }, { nome: "Teclado", preco: 150, estoque: 50 }, { nome: "Monitor", preco: 800, estoque: 20 }]

/* 
EXPLICAÇÃO:
1. Criamos um array de objetos chamado **produtos**, onde cada objeto representa um 
   produto com propriedades **nome**, **preco** e **estoque**.
2. O método **filter** é chamado no array **produtos**, passando uma função de retorno (callback) como argumento.
3. Essa função de retorno recebe um objeto do array (**produto**) e retorna `true` 
   se a propriedade **estoque** for maior que 0 e a propriedade **preco** for menor ou igual a 1000.
4. O método **filter** cria um novo array (**produtosDisponiveis**) que contém apenas 
   os objetos para os quais a função de retorno retornou `true`.

------------------------------------------------------------------------------------
DICAS IMPORTANTES:
1. O método **filter** não altera o array original, ele sempre retorna um novo array.
2. A função de retorno (callback) passada ao **filter** pode receber três argumentos: 
   o elemento atual, o índice do elemento e o array original.
3. Use **filter** quando quiser criar um novo array contendo apenas os elementos que atendem a uma condição específica.

------------------------------------------------------------------------------------
CONCLUSÃO:
O método **filter** é uma ferramenta poderosa e flexível para filtrar elementos de arrays em JavaScript, 
permitindo a criação de novos arrays a partir de uma função de retorno aplicada a cada elemento do array original.
*/