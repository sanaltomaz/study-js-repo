/* 
CRIAÇÃO E ITERAÇÃO DE MATRIZES EM JAVASCRIPT

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
  EXPLICAÇÃO:
  1. Criação direta: Declaramos cada linha da matriz manualmente.
  2. Criação dinâmica: Usamos métodos do array para criar uma matriz de 3x3 preenchida com valores 0.
  */
  
  /* 
  ------------------------------------------------------------------------------------
  ITERAÇÃO EM MATRIZES:
  Podemos usar laços aninhados para percorrer todos os elementos de uma matriz.
  */
  
  for (let i = 0; i < matrizDireta.length; i++) {
    for (let j = 0; j < matrizDireta[i].length; j++) {
      console.log(`Elemento [${i}][${j}]:`, matrizDireta[i][j]);
    }
  }
  // Resultado:
  // Elemento [0][0]: 1
  // Elemento [0][1]: 2
  // Elemento [1][0]: 3
  // Elemento [1][1]: 4
  
  /* 
  EXPLICAÇÃO:
  1. Usamos um laço externo para iterar sobre as linhas da matriz.
  2. Usamos um laço interno para iterar sobre os elementos de cada linha.
  3. A cada iteração, imprimimos o elemento atual e sua posição na matriz.
  */
  
  