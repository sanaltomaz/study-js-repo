/* 
------------------------------------------------------------------------------------
# CLONAGEM PROFUNDA DE ARRAYS

------------------------------------------------------------------------------------
## 1. Introdução
Clonar profundamente um array significa criar uma cópia completa, onde todos os objetos 
e arrays internos também são copiados de forma independente. 
Ou seja, as referências não são copiadas, mas sim os próprios dados.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição básica**: A clonagem profunda cria uma cópia completa de todos os níveis do array, 
  incluindo objetos e arrays aninhados. Isso garante que alterações na cópia não afetem o array original e vice-versa.
- **Quando usar**: A clonagem profunda é necessária quando o array contém objetos ou arrays 
  aninhados e você quer evitar que alterações internas impactem a estrutura original.
- **Benefícios**: Garante que a estrutura de dados original e a copiada sejam independentes, 
  especialmente útil quando os dados contêm objetos complexos.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Clonagem Profunda com JSON
------------------------------------------------------------------------------------
*/
const arrayAninhado = [1, [2, 3], { chave: 'valor', }];
const copiaProfunda = JSON.parse(JSON.stringify(arrayAninhado));
console.log(copiaProfunda);
// Resultado: [1, [2, 3], { chave: 'valor' }]

copiaProfunda[1][0] = 99;
copiaProfunda[2].chave = 'novo valor';
console.log(arrayAninhado);
// Resultado: [1, [2, 3], { chave: 'valor' }] (não foi alterado)
console.log(copiaProfunda);
// Resultado: [1, [99, 3], { chave: 'novo valor' }]

/* 
------------------------------------------------------------------------------------
### Exemplo 2: Função Genérica para Clonagem Profunda e Superficial
------------------------------------------------------------------------------------
*/
function clonarArray(array, tipo = 'superficial') {
  if (tipo === 'superficial') {
    return [...array];
  } else if (tipo === 'profunda') {
    return JSON.parse(JSON.stringify(array));
  } else {
    throw new Error('Tipo de clonagem inválido');
  }
}

const originalComplexo = [1, [2, 3], { a: 10, b: 20 }];
const copiaSuperficial = clonarArray(originalComplexo, 'superficial');
const copiaProfunda = clonarArray(originalComplexo, 'profunda');

copiaSuperficial[1][0] = 99;
copiaProfunda[2].a = 99;

console.log('Original:', originalComplexo);
// Resultado: [1, [99, 3], { a: 10, b: 20 }] (alterado na cópia superficial)
console.log('Cópia Superficial:', copiaSuperficial);
// Resultado: [1, [99, 3], { a: 10, b: 20 }]
console.log('Cópia Profunda:', copiaProfunda);
// Resultado: [1, [2, 3], { a: 99, b: 20 }]

/* 
------------------------------------------------------------------------------------
## 4. Considerações Finais
- A clonagem profunda é essencial quando é necessário criar uma cópia independente de 
  arrays que contêm objetos ou arrays internos.
- Usar a clonagem profunda evita problemas relacionados à modificação acidental de dados 
  compartilhados entre o original e a cópia.
------------------------------------------------------------------------------------
*/
