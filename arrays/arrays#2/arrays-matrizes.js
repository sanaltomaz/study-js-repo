/* 
MATRIZES COM ARRAYS EM JAVASCRIPT

------------------------------------------------------------------------------------
Uma **matriz** em JavaScript é essencialmente um **array multidimensional**, ou seja, 
um array cujos elementos também são arrays. Essa estrutura permite organizar dados 
em formato de tabela, com linhas e colunas.

Matrizes são úteis em várias situações, como representação de grades, tabelas, 
imagens (pixels), e operações matemáticas como multiplicação de matrizes.
------------------------------------------------------------------------------------

EXEMPLO BÁSICO:
*/

const matriz = [
  [1, 2, 3],  // Linha 0
  [4, 5, 6],  // Linha 1
  [7, 8, 9]   // Linha 2
];

// Acessando elementos individuais
console.log(matriz[0][1]); // Resultado: 2 (linha 0, coluna 1)
console.log(matriz[2][2]); // Resultado: 9 (linha 2, coluna 2)

/* 
EXPLICAÇÃO:
1. Cada elemento do array principal é outro array (representando uma linha).
2. Acessamos um elemento usando dois índices:
   - O primeiro índice representa a linha.
   - O segundo índice representa a coluna.
*/

/* 
------------------------------------------------------------------------------------
CRIANDO MATRIZES:
Matrizes podem ser criadas diretamente ou dinamicamente usando laços.
*/

// 1. Criação direta
const matrizDireta = [
  [1, 2],
  [3, 4]
];

// 2. Criação dinâmica (exemplo: matriz 3x3 com valores 0)
const matrizDinamica = Array(3).fill(null).map(() => Array(3).fill(0));
console.log(matrizDinamica);
// Resultado: [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ]

/* 
------------------------------------------------------------------------------------
ITERAÇÃO EM MATRIZES:
Podemos usar laços aninhados para percorrer todos os elementos de uma matriz.
*/

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log(`Elemento [${i}][${j}]:`, matriz[i][j]);
  }
}
// Resultado:
// Elemento [0][0]: 1
// Elemento [0][1]: 2
// Elemento [0][2]: 3
// ...

/* 
------------------------------------------------------------------------------------
EXEMPLO MAIS TRABALHADO: SOMA DE MATRIZES
Dada duas matrizes de mesma dimensão, somamos seus elementos correspondentes.
*/

const matrizA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const matrizB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
];

const somaMatrizes = (a, b) => {
  const resultado = [];
  for (let i = 0; i < a.length; i++) {
    const linha = [];
    for (let j = 0; j < a[i].length; j++) {
      linha.push(a[i][j] + b[i][j]);
    }
    resultado.push(linha);
  }
  return resultado;
};

console.log(somaMatrizes(matrizA, matrizB));
// Resultado: [ [10, 10, 10], [10, 10, 10], [10, 10, 10] ]

/* 
------------------------------------------------------------------------------------
OUTRAS OPERAÇÕES IMPORTANTES:
1. **Multiplicação de matrizes**:
   - Requer que o número de colunas da primeira matriz seja igual ao número de linhas da segunda.
   - O elemento resultante é a soma dos produtos dos elementos correspondentes.
*/

const multiplicarMatrizes = (a, b) => {
  const resultado = [];
  for (let i = 0; i < a.length; i++) {
    const linha = [];
    for (let j = 0; j < b[0].length; j++) {
      let soma = 0;
      for (let k = 0; k < a[i].length; k++) {
        soma += a[i][k] * b[k][j];
      }
      linha.push(soma);
    }
    resultado.push(linha);
  }
  return resultado;
};

const matrizC = [
  [1, 2],
  [3, 4],
  [5, 6]
];

const matrizD = [
  [7, 8, 9],
  [10, 11, 12]
];

console.log(multiplicarMatrizes(matrizC, matrizD));
// Resultado: [ [27, 30, 33], [61, 68, 75], [95, 106, 117] ]

/* 
------------------------------------------------------------------------------------
RESUMO:
1. Matrizes são arrays multidimensionais que permitem organizar dados em formato tabular.
2. Podem ser criadas diretamente ou de forma dinâmica.
3. Operações comuns incluem soma, multiplicação e iteração sobre os elementos.
4. São amplamente usadas em representações matemáticas e computacionais, como no processamento de imagens ou em algoritmos de machine learning.

------------------------------------------------------------------------------------
*/
