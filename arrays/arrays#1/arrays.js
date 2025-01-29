/* 
ARRAYS EM JAVASCRIPT

------------------------------------------------------------------------------------
Um array é uma estrutura de dados usada para armazenar múltiplos valores em uma única variável.
Os valores, chamados de **elementos**, são organizados em uma **ordem indexada**, 
onde cada elemento é acessado por um índice numérico, começando em 0.

Os arrays em JavaScript são muito versáteis e podem conter diferentes tipos de dados,
como números, strings, objetos e até mesmo outros arrays.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
const frutas = ['maçã', 'banana', 'laranja'];

console.log(frutas[0]); 
// Resultado: 'maçã' (primeiro elemento)

console.log(frutas[2]); 
// Resultado: 'laranja' (terceiro elemento)

/* 
EXPLICAÇÃO:
1. O array **frutas** contém três elementos: 'maçã', 'banana' e 'laranja'.
2. Cada elemento pode ser acessado pelo seu índice:
   - **0** para 'maçã',
   - **1** para 'banana',
   - **2** para 'laranja'.
3. Caso você tente acessar um índice que não existe, o retorno será **undefined**.

------------------------------------------------------------------------------------
CRIANDO ARRAYS:
Há várias formas de criar arrays em JavaScript:
1. Utilizando colchetes (`[]`).
2. Utilizando o construtor `Array()`.

EXEMPLOS:
*/
const numeros = [1, 2, 3, 4, 5]; 
// Criação com colchetes.

const letras = new Array('a', 'b', 'c'); 
// Criação com o construtor Array().

const vazio = []; 
// Um array vazio.

/* 
------------------------------------------------------------------------------------
PROPRIEDADES IMPORTANTES DOS ARRAYS:
1. **length**:
   Retorna o número de elementos no array.
*/
console.log(frutas.length); 
// Resultado: 3 (o array contém 3 elementos)

/* 
2. Acessando o último elemento:
   Usamos o comprimento do array (length) para obter o índice do último elemento.
*/
console.log(frutas[frutas.length - 1]); 
// Resultado: 'laranja'

/* 
------------------------------------------------------------------------------------
MODIFICANDO ARRAYS:
Os arrays possuem métodos para adicionar, remover ou alterar elementos.

1. **Adicionar elementos**:
   - `push`: Adiciona ao final do array.
   - `unshift`: Adiciona ao início do array.
*/
frutas.push('uva'); 
console.log(frutas); 
// Resultado: ['maçã', 'banana', 'laranja', 'uva']

frutas.unshift('morango'); 
console.log(frutas); 
// Resultado: ['morango', 'maçã', 'banana', 'laranja', 'uva']

/* 
2. **Remover elementos**:
   - `pop`: Remove o último elemento.
   - `shift`: Remove o primeiro elemento.
*/
frutas.pop(); 
console.log(frutas); 
// Resultado: ['morango', 'maçã', 'banana', 'laranja']

frutas.shift(); 
console.log(frutas); 
// Resultado: ['maçã', 'banana', 'laranja']

/* 
------------------------------------------------------------------------------------
ITERAÇÃO EM ARRAYS:
Podemos percorrer os elementos de um array usando laços como **for** ou métodos como **forEach**.

EXEMPLO:
*/
frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`);
});
// Resultado:
// 0: maçã
// 1: banana
// 2: laranja

/* 
------------------------------------------------------------------------------------
OUTROS MÉTODOS IMPORTANTES:
1. **map**:
   Cria um novo array com base no array original.
*/
const numerosDobro = numeros.map(num => num * 2);
console.log(numerosDobro); 
// Resultado: [2, 4, 6, 8, 10]

/* 
2. **filter**:
   Filtra os elementos do array que atendem a uma condição.
*/
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares); 
// Resultado: [2, 4]

/* 
3. **reduce**:
   Reduz o array a um único valor, acumulando resultados.
*/
const soma = numeros.reduce((acumulador, atual) => acumulador + atual, 0);
console.log(soma); 
// Resultado: 15

/* 
------------------------------------------------------------------------------------
ARRAYS MULTIDIMENSIONAIS:
Um array pode conter outros arrays, formando matrizes ou listas aninhadas.
*/
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[1][2]); 
// Resultado: 6 (segunda linha, terceira coluna)

/* 
------------------------------------------------------------------------------------
RESUMO:
1. Arrays são estruturas indexadas que armazenam coleções de dados.
2. Possuem muitos métodos para manipulação e iteração.
3. Podem conter diferentes tipos de dados, inclusive outros arrays.

Com essas ferramentas, você pode criar listas dinâmicas, processar grandes volumes de dados
ou estruturar informações complexas.

------------------------------------------------------------------------------------
*/
