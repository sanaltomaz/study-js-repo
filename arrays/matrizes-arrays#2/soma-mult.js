/* 
SOMA E MULTIPLICAÇÃO DE MATRIZES EM JAVASCRIPT

------------------------------------------------------------------------------------
EXEMPLO TRABALHADO: SOMA DE MATRIZES
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
  EXPLICAÇÃO:
  1. Criamos duas matrizes **matrizA** e **matrizB**, ambas de mesma dimensão.
  2. A função **somaMatrizes** itera sobre cada elemento das matrizes e soma os elementos correspondentes.
  3. O resultado é uma nova matriz cujos elementos são a soma dos elementos de **matrizA** e **matrizB**.
  */
  
  /* 
  ------------------------------------------------------------------------------------
  MULTIPLICAÇÃO DE MATRIZES:
  Requer que o número de colunas da primeira matriz seja igual ao número de linhas da segunda.
  O elemento resultante é a soma dos produtos dos elementos correspondentes.
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
  EXPLICAÇÃO:
  1. Criamos duas matrizes **matrizC** e **matrizD**.
  2. A função **multiplicarMatrizes** itera sobre as linhas de **matrizC** e as colunas de **matrizD**.
  3. Para cada elemento resultante, calcula-se a soma dos produtos dos elementos correspondentes das duas matrizes.
  4. O resultado é uma nova matriz resultante da multiplicação de **matrizC** e **matrizD**.
  */
  
  /* 
  ------------------------------------------------------------------------------------
  RESUMO:
  1. Soma de Matrizes: Soma os elementos correspondentes de duas matrizes de mesma dimensão.
  2. Multiplicação de Matrizes: Requer que o número de colunas da primeira matriz seja igual ao número de linhas da segunda e calcula a soma dos produtos dos elementos correspondentes.
  
  Essas operações são fundamentais para diversas aplicações em ciência da computação, matemática e áreas afins.
  */
  
  