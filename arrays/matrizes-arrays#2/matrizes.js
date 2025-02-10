/* 
DEFINIÇÃO DE MATRIZES EM JAVASCRIPT

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

