/* 
RESUMO DE ARRAYS EM JAVASCRIPT

------------------------------------------------------------------------------------
Arrays em JavaScript são estruturas de dados que permitem armazenar múltiplos valores 
em uma única variável. Eles são muito flexíveis e amplamente utilizados para 
representar coleções de dados. Cada valor armazenado em um array é chamado de 
**elemento**, e cada posição de um elemento é identificada por um **índice**.

------------------------------------------------------------------------------------
CARACTERÍSTICAS PRINCIPAIS DE ARRAYS:
1. **Elementos**: Cada valor armazenado em um array é um **elemento**. 
Um array pode conter valores de qualquer tipo, como números, strings, objetos, etc.

2. **Índice**: Os índices em JavaScript são baseados em zero, ou seja, o primeiro 
elemento de um array possui o índice `0`, o segundo o índice `1`, e assim por diante.

3. **Arrays Multidimensionais**: Arrays podem conter outros arrays como elementos, 
formando **arrays multidimensionais**. Isso permite a criação de estruturas mais complexas.

------------------------------------------------------------------------------------
EXEMPLOS DE COMO OS ARRAYS FUNCIONAM:

Array base para exemplos: */
const frutas = ['Maçã', 'Banana', 'Laranja', 'Morango'];

// O índice de cada elemento:
console.log(frutas[0]); // Resultado: "Maçã"
console.log(frutas[1]); // Resultado: "Banana"

// Modificando um elemento do array:
frutas[2] = 'Limão';
console.log(frutas); // Resultado: ['Maçã', 'Banana', 'Limão', 'Morango']

/*
------------------------------------------------------------------------------------
PROPRIEDADES IMPORTANTES DE ARRAYS:

1. **length**: Retorna o número de elementos no array.
*/
console.log(frutas.length); 
// Resultado: 4


// 2. **constructor**: Retorna o tipo de construtor do array (que é sempre "Array").
console.log(frutas.constructor);
// Resultado: Array

/*
------------------------------------------------------------------------------------
MÉTODOS IMPORTANTES PARA MANIPULAR ARRAYS:

1. **push**: Adiciona um ou mais elementos ao final do array.
*/
frutas.push('Uva');
console.log(frutas); 
// Resultado: ['Maçã', 'Banana', 'Limão', 'Morango', 'Uva']


// 2. **pop**: Remove e retorna o último elemento do array.
const removido = frutas.pop();
console.log(removido); 
// Resultado: 'Uva'
console.log(frutas);
// Resultado: ['Maçã', 'Banana', 'Limão', 'Morango']

// 3. **shift**: Remove e retorna o primeiro elemento do array.
const primeiroRemovido = frutas.shift();
console.log(primeiroRemovido); 
// Resultado: 'Maçã'
console.log(frutas);
// Resultado: ['Banana', 'Limão', 'Morango']

// 4. **unshift**: Adiciona um ou mais elementos no início do array.
frutas.unshift('Melancia');
console.log(frutas); 
// Resultado: ['Melancia', 'Banana', 'Limão', 'Morango']

// 5. **indexOf**: Retorna o índice do primeiro elemento encontrado no array.
const indice = frutas.indexOf('Limão');
console.log(indice); 
// Resultado: 2

// 6. **includes**: Verifica se um determinado elemento existe no array, retornando `true` ou `false`.
const temBanana = frutas.includes('Banana');
console.log(temBanana); 
// Resultado: true

// 7. **slice**: Retorna uma cópia rasa de uma parte do array, sem modificar o original.
const algumasFrutas = frutas.slice(1, 3);
console.log(algumasFrutas);
// Resultado: ['Banana', 'Limão']

// 8. **splice**: Modifica o conteúdo de um array removendo ou substituindo elementos.
frutas.splice(1, 1, 'Pera');
console.log(frutas);
// Resultado: ['Melancia', 'Pera', 'Limão', 'Morango']

/*
------------------------------------------------------------------------------------
OUTROS MÉTODOS IMPORTANTES:

1. **forEach**: Itera sobre cada elemento do array, executando uma função para cada um.
*/
frutas.forEach((fruta, index) => {
  console.log(`${index}: ${fruta}`);
});
// Resultado:
// 0: Melancia
// 1: Pera
// 2: Limão
// 3: Morango

// 2. **map**: Cria um novo array com os resultados de aplicar uma função em cada elemento do array.
const frutasEmMaiusculo = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasEmMaiusculo);
// Resultado: ['MELANCIA', 'PERA', 'LIMÃO', 'MORANGO']

// 3. **filter**: Cria um novo array com elementos que satisfazem uma condição.
const frutasComL = frutas.filter(fruta => fruta.includes('L'));
console.log(frutasComL);
// Resultado: ['Melancia', 'Limão']

// 4. **reduce**: Aplica uma função a um acumulador e cada elemento para reduzir o array a um único valor.
const nomeFrutas = frutas.reduce((acumulador, fruta) => acumulador + ' ' + fruta, '');
console.log(nomeFrutas);
// Resultado: "Melancia Pera Limão Morango"

/*
------------------------------------------------------------------------------------
RESUMO:
1. Arrays em JavaScript são coleções de elementos, indexados de forma numérica, começando por 0.
2. Cada elemento de um array pode ser de qualquer tipo, incluindo outros arrays (arrays multidimensionais).
3. As propriedades mais comuns são `length` e `constructor`.
4. Métodos como `push`, `pop`, `shift`, `unshift`, `slice`, e `splice` são essenciais para a manipulação dos dados em arrays.
5. Métodos como `forEach`, `map`, `filter`, e `reduce` permitem iterar e transformar arrays de forma eficiente.

------------------------------------------------------------------------------------
*/
