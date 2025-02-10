/* 
------------------------------------------------------------------------------------
# EXEMPLOS MAIS TRABALHADOS: CLONAGEM DE ARRAYS

------------------------------------------------------------------------------------
## 1. Introdução
A clonagem de arrays é uma prática comum para evitar modificações indesejadas em dados originais. 
Dependendo da complexidade dos dados (simples ou com objetos aninhados), a abordagem de clonagem pode variar. 
Vamos explorar exemplos práticos de clonagem superficial e profunda.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição**: Clonar um array significa criar uma cópia do array original, de modo que 
  as mudanças no array clonado não afetem o original.
- **Tipos de clonagem**:
  - **Clonagem Superficial**: Copia apenas os elementos de nível superior do array. 
    Se o array contém objetos ou arrays aninhados, as referências a esses objetos são copiadas.
  - **Clonagem Profunda**: Cria uma cópia completa, incluindo objetos e arrays aninhados, 
    de modo que alterações no array clonado não afetam nenhum nível do array original.
- **Quando usar**: A clonagem superficial é adequada quando o array não contém objetos ou arrays aninhados, 
  enquanto a clonagem profunda deve ser usada em arrays que contêm dados mais complexos.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Clonagem Superficial com o Operador Spread
------------------------------------------------------------------------------------
*/
const original = [1, 2, 3, 4];
const copia = [...original];

console.log(copia);
// Resultado: [1, 2, 3, 4]

copia.push(5);
console.log(original);
// Resultado: [1, 2, 3, 4] (o array original não é alterado)
console.log(copia);
// Resultado: [1, 2, 3, 4, 5]

/* 
------------------------------------------------------------------------------------
### Exemplo 2: Clonagem com o Método slice()
------------------------------------------------------------------------------------
*/
const copiaComSlice = original.slice();
console.log(copiaComSlice);
// Resultado: [1, 2, 3, 4]

copiaComSlice.pop();
console.log(original);
// Resultado: [1, 2, 3, 4] (o array original não é alterado)
console.log(copiaComSlice);
// Resultado: [1, 2, 3]

/* 
------------------------------------------------------------------------------------
### Exemplo 3: Clonagem com Array.from()
------------------------------------------------------------------------------------
*/
const copiaComArrayFrom = Array.from(original);
console.log(copiaComArrayFrom);
// Resultado: [1, 2, 3, 4]

copiaComArrayFrom[0] = 10;
console.log(original);
// Resultado: [1, 2, 3, 4] (o array original não é alterado)
console.log(copiaComArrayFrom);
// Resultado: [10, 2, 3, 4]

/* 
------------------------------------------------------------------------------------
### Exemplo 4: Clonagem com concat()
------------------------------------------------------------------------------------
*/
const copiaComConcat = original.concat();
console.log(copiaComConcat);
// Resultado: [1, 2, 3, 4]

copiaComConcat.push(6);
console.log(original);
// Resultado: [1, 2, 3, 4] (o array original não é alterado)
console.log(copiaComConcat);
// Resultado: [1, 2, 3, 4, 6]

/* 
------------------------------------------------------------------------------------
### Exemplo 5: Clonagem Profunda com JSON.parse e JSON.stringify
------------------------------------------------------------------------------------
*/
const arrayAninhado = [1, [2, 3], { chave: 'valor' }];

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
## 4. Considerações Finais
- Para clonar arrays simples, use `spread`, `slice`, `Array.from`, ou `concat`.
- Para arrays com objetos ou aninhados, use uma estratégia de clonagem profunda.
- Escolha a abordagem de clonagem conforme a complexidade dos dados e as necessidades do código.
------------------------------------------------------------------------------------
*/
