/* 
MÉTODOS DE ARRAY EM JAVASCRIPT

------------------------------------------------------------------------------------
Os arrays em JavaScript possuem uma vasta gama de métodos para manipulação e iteração,
os quais tornam seu uso extremamente poderoso e flexível. Esses métodos permitem
adicionar, remover, transformar e processar dados de forma eficiente.

------------------------------------------------------------------------------------
EXEMPLOS DE MÉTODOS IMPORTANTES:
*/

// Array base para exemplos:
const numeros = [1, 2, 3, 4, 5];

/*
1. **push** e **pop**:
   - `push`: Adiciona elementos ao final do array.
   - `pop`: Remove e retorna o último elemento do array.
*/
numeros.push(6);
console.log(numeros); 
// Resultado: [1, 2, 3, 4, 5, 6]

const removido = numeros.pop();
console.log(removido); 
// Resultado: 6
console.log(numeros);
// Resultado: [1, 2, 3, 4, 5]

/*
2. **shift** e **unshift**:
   - `shift`: Remove e retorna o primeiro elemento do array.
   - `unshift`: Adiciona elementos ao início do array.
*/
numeros.unshift(0);
console.log(numeros);
// Resultado: [0, 1, 2, 3, 4, 5]

const primeiroRemovido = numeros.shift();
console.log(primeiroRemovido);
// Resultado: 0
console.log(numeros);
// Resultado: [1, 2, 3, 4, 5]

/*
3. **map**:
   Cria um novo array transformando cada elemento com base em uma função fornecida.
*/
const dobro = numeros.map(num => num * 2);
console.log(dobro);
// Resultado: [2, 4, 6, 8, 10]

/*
4. **filter**:
   Cria um novo array com elementos que passam em uma condição específica.
*/
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares);
// Resultado: [2, 4]

/*
5. **reduce**:
   Reduz o array a um único valor acumulando os resultados.
*/
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma);
// Resultado: 15

/*
6. **forEach**:
   Itera sobre o array, executando uma função para cada elemento.
*/
numeros.forEach((num, index) => {
  console.log(`Índice ${index}: ${num}`);
});
// Resultado:
// Índice 0: 1
// Índice 1: 2
// Índice 2: 3
// Índice 3: 4
// Índice 4: 5

/*
------------------------------------------------------------------------------------
EXEMPLO MAIS TRABALHADO:
Vamos aplicar diferentes métodos em uma lógica mais complexa.
*/

const produtos = [
  { nome: 'Celular', preco: 1000, categoria: 'Eletrônicos' },
  { nome: 'Camisa', preco: 50, categoria: 'Vestuário' },
  { nome: 'Notebook', preco: 3000, categoria: 'Eletrônicos' },
  { nome: 'Tênis', preco: 200, categoria: 'Vestuário' }
];

// 1. Filtrar produtos da categoria 'Eletrônicos'
const eletronicos = produtos.filter(produto => produto.categoria === 'Eletrônicos');
console.log(eletronicos);
// Resultado:
// [
//   { nome: 'Celular', preco: 1000, categoria: 'Eletrônicos' },
//   { nome: 'Notebook', preco: 3000, categoria: 'Eletrônicos' }
// ]

// 2. Mapear para retornar apenas os preços
const precos = produtos.map(produto => produto.preco);
console.log(precos);
// Resultado: [1000, 50, 3000, 200]

// 3. Calcular o preço total usando reduce
const precoTotal = precos.reduce((total, preco) => total + preco, 0);
console.log(precoTotal);
// Resultado: 4250

/*
------------------------------------------------------------------------------------
OUTROS MÉTODOS ÚTEIS:
1. **find**:
   Retorna o primeiro elemento que satisfaz uma condição.
*/
const produtoCaro = produtos.find(produto => produto.preco > 2000);
console.log(produtoCaro);
// Resultado: { nome: 'Notebook', preco: 3000, categoria: 'Eletrônicos' }

/*
2. **some** e **every**:
   - `some`: Retorna `true` se pelo menos um elemento satisfaz a condição.
   - `every`: Retorna `true` se todos os elementos satisfazem a condição.
*/
const algumCaro = produtos.some(produto => produto.preco > 2000);
console.log(algumCaro);
// Resultado: true

const todosEletronicos = eletronicos.every(produto => produto.categoria === 'Eletrônicos');
console.log(todosEletronicos);
// Resultado: true

/*
------------------------------------------------------------------------------------
RESUMO:
1. Os métodos de array permitem manipular e processar dados de maneira eficiente.
2. Métodos como `map`, `filter`, e `reduce` são amplamente utilizados em pipelines de dados.
3. Entender o comportamento e o propósito de cada método é essencial para escrever código limpo e eficiente.
4. Experimente combinar diferentes métodos para resolver problemas mais complexos.

------------------------------------------------------------------------------------
*/
