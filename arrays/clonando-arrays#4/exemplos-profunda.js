// CLONAGEM SUPERFICIAL E PROFUNDA COM FUNÇÃO GENÉRICA

// 1. Introdução
// A clonagem de arrays pode ser feita de forma superficial ou profunda. 
// A clonagem superficial cria uma cópia de um array onde apenas os elementos de nível superior 
// são copiados, enquanto a clonagem profunda cria uma cópia completa, incluindo objetos internos 
// e arrays aninhados, garantindo independência total entre a cópia e o original.

// 2. Função Genérica `clonarArray`
// A função `clonarArray` permite realizar tanto a clonagem superficial quanto profunda, 
// dependendo do tipo especificado.

// Lógica:
// - Se o tipo for "superficial", a função cria uma cópia rasa usando o operador spread.
// - Se o tipo for "profunda", a função utiliza `JSON.parse(JSON.stringify(array))` 
//   para realizar a clonagem profunda, copiando todos os níveis do array.

// Função:
function clonarArray(array, tipo = 'superficial') {
    if (tipo === 'superficial') {
      return [...array];
    } else if (tipo === 'profunda') {
      return JSON.parse(JSON.stringify(array));
    } else {
      throw new Error('Tipo de clonagem inválido');
    }
  }
  
  // 3. Exemplos Práticos
  
  // Exemplo 1: Clonagem Superficial e Profunda
  const originalComplexo = [1, [2, 3], { a: 10, b: 20 }];
  const copiaSuperficial = clonarArray(originalComplexo, 'superficial');
  const copiaProfunda = clonarArray(originalComplexo, 'profunda');
  
  // Alterando os valores nas cópias
  copiaSuperficial[1][0] = 99; // Modificando o array interno na cópia superficial
  copiaProfunda[2].a = 99; // Modificando o objeto na cópia profunda
  
  console.log('Original:', originalComplexo);
  // Resultado: [1, [99, 3], { a: 10, b: 20 }] (alterado na cópia superficial)
  console.log('Cópia Superficial:', copiaSuperficial);
  // Resultado: [1, [99, 3], { a: 10, b: 20 }]
  console.log('Cópia Profunda:', copiaProfunda);
  // Resultado: [1, [2, 3], { a: 99, b: 20 }]
  
  // Exemplo 2: Usando Função para Clonagem Profunda em Dados Complexos
  const dadosComplexos = [1, [2, 3], { nome: 'Alice', idade: 30 }];
  const copiaDados = clonarArray(dadosComplexos, 'profunda');
  
  // Alterando os dados na cópia profunda
  copiaDados[1][1] = 100;
  copiaDados[2].nome = 'Bob';
  
  console.log('Dados Originais:', dadosComplexos);
  // Resultado: [1, [2, 3], { nome: 'Alice', idade: 30 }]
  console.log('Cópia Profunda:', copiaDados);
  // Resultado: [1, [2, 100], { nome: 'Bob', idade: 30 }]
  
  // Exemplo 3: Clonagem Superficial com Objetos Simples
  const simples = [1, 2, 3];
  const copiaSimples = clonarArray(simples, 'superficial');
  
  // Alterando a cópia superficial
  copiaSimples[0] = 99;
  
  console.log('Original Simples:', simples);
  // Resultado: [1, 2, 3]
  console.log('Cópia Superficial Simples:', copiaSimples);
  // Resultado: [99, 2, 3]
  
  // 4. Considerações Finais
  // - A clonagem superficial é eficiente quando se precisa de uma cópia rasa e os dados não contêm 
  //   objetos ou arrays internos que precisem ser copiados de forma independente.
  // - A clonagem profunda deve ser usada quando é necessário garantir que a cópia seja completamente 
  //   independente, sem compartilhar referências com o array original.
  