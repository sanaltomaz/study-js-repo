/* 
MÉTODO REDUCE

------------------------------------------------------------------------------------
O método **reduce** é utilizado para iterar sobre um array e acumular seus valores em um único valor de retorno.
Ele recebe uma função de retorno (callback) que é chamada para cada elemento do array, 
além de um valor inicial opcional.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce(function(acumulador, num) {
    return acumulador + num;
}, 0);

console.log(soma); 
// Resultado: 15

/* 
EXPLICAÇÃO:
1. Criamos um array chamado **numeros** com cinco elementos: 1, 2, 3, 4 e 5.
2. O método **reduce** é chamado no array **numeros**, passando uma função de retorno (callback) 
   e um valor inicial (`0`) como argumentos.
3. A função de retorno recebe dois parâmetros: o **acumulador** e o elemento atual (**num**).
4. A função de retorno retorna a soma do acumulador e do elemento atual.
5. O método **reduce** acumula os valores e retorna o resultado final (**soma**), que é 15.

------------------------------------------------------------------------------------
EXEMPLO COM FUNÇÃO SETA (ARROW FUNCTION):
*/
let produto = numeros.reduce((acumulador, num) => acumulador * num, 1);

console.log(produto); 
// Resultado: 120

/* 
EXPLICAÇÃO:
1. O mesmo array **numeros** é usado.
2. O método **reduce** é chamado no array **numeros**, passando uma função seta (arrow function) 
   e um valor inicial (`1`) como argumentos.
3. A função seta recebe dois parâmetros: o **acumulador** e o elemento atual (**num**).
4. A função seta retorna o produto do acumulador e do elemento atual.
5. O método **reduce** acumula os valores e retorna o resultado final (**produto**), que é 120.

------------------------------------------------------------------------------------
EXEMPLO COM OBJETOS:
*/
let pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 28 }
];

let idadeTotal = pessoas.reduce(function(acumulador, pessoa) {
    return acumulador + pessoa.idade;
}, 0);

console.log(idadeTotal); 
// Resultado: 83

/* 
EXPLICAÇÃO:
1. Criamos um array de objetos chamado **pessoas**, onde cada objeto representa uma pessoa 
   com propriedades **nome** e **idade**.
2. O método **reduce** é chamado no array **pessoas**, passando uma função de retorno (callback) 
   e um valor inicial (`0`) como argumentos.
3. A função de retorno recebe dois parâmetros: o **acumulador** e o objeto atual (**pessoa**).
4. A função de retorno retorna a soma do acumulador e da propriedade **idade** do objeto atual.
5. O método **reduce** acumula os valores e retorna o resultado final (**idadeTotal**), que é 83.

------------------------------------------------------------------------------------
EXEMPLO COM FILTROS MAIS COMPLEXOS:
*/
let pedidos = [
    { produto: "Laptop", quantidade: 2, preco: 3000 },
    { produto: "Mouse", quantidade: 5, preco: 50 },
    { produto: "Teclado", quantidade: 3, preco: 150 },
    { produto: "Monitor", quantidade: 1, preco: 800 }
];

let valorTotalPedidos = pedidos.reduce(function(acumulador, pedido) {
    return acumulador + (pedido.quantidade * pedido.preco);
}, 0);

console.log(valorTotalPedidos); 
// Resultado: 7500

/* 
EXPLICAÇÃO:
1. Criamos um array de objetos chamado **pedidos**, onde cada objeto representa um pedido 
   com propriedades **produto**, **quantidade** e **preco**.
2. O método **reduce** é chamado no array **pedidos**, passando uma função de retorno (callback) 
   e um valor inicial (`0`) como argumentos.
3. A função de retorno recebe dois parâmetros: o **acumulador** e o objeto atual (**pedido**).
4. A função de retorno retorna a soma do acumulador e do produto da propriedade **quantidade** 
   pelo **preco** do objeto atual.
5. O método **reduce** acumula os valores e retorna o resultado final (**valorTotalPedidos**), que é 7500.

------------------------------------------------------------------------------------
DICAS IMPORTANTES:
1. O método **reduce** não altera o array original, ele sempre retorna um único valor.
2. A função de retorno (callback) passada ao **reduce** pode receber quatro argumentos: 
   o acumulador, o elemento atual, o índice do elemento e o array original.
3. Use **reduce** quando quiser acumular valores de um array em um único resultado.

------------------------------------------------------------------------------------
CONCLUSÃO:
O método **reduce** é uma ferramenta poderosa e flexível para acumular valores em arrays em JavaScript, 
permitindo a criação de um único valor a partir de uma função de retorno aplicada a cada elemento do array original.

*/