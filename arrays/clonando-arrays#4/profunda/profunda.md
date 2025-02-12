# CLONAGEM PROFUNDA DE ARRAYS

## 1. Introdução
A clonagem profunda de arrays é uma técnica onde uma cópia completa do array é criada, incluindo todos os objetos e arrays internos. Ao contrário da clonagem superficial, onde apenas referências para os elementos internos são copiadas, a clonagem profunda garante que o array original e a cópia sejam totalmente independentes.

A clonagem profunda é essencial quando você precisa de uma cópia do array e deseja garantir que qualquer modificação na cópia não afete o array original, especialmente quando o array contém objetos ou arrays internos.

## 2. Descrição do Funcionamento

### O que acontece na clonagem profunda?
- **Clonagem superficial**: Apenas os elementos de nível superior do array são copiados. Se o array contiver objetos ou outros arrays internos, essas referências são copiadas, ou seja, os objetos/arrays internos não são duplicados, mas sim compartilhados entre o original e a cópia.
  
- **Clonagem profunda**: Copia recursivamente todos os níveis do array, criando uma nova instância para cada objeto ou array interno. Isso garante que tanto o array principal quanto seus elementos internos sejam independentes entre si.

### Quando utilizar clonagem profunda?
- Quando você está lidando com dados complexos, como arrays que contêm objetos ou arrays aninhados, e deseja modificar a cópia sem afetar o original.
- Quando há a necessidade de evitar efeitos colaterais causados por referências compartilhadas, como alterações acidentais nos dados internos de um array.

## 3. Exemplos Práticos

### Exemplo 1: Clonagem Profunda com JSON
O método mais simples e comumente usado para clonagem profunda em JavaScript é utilizando `JSON.parse()` e `JSON.stringify()`. Este método converte o array em uma string JSON e, em seguida, reconverte a string de volta para um array ou objeto, criando uma cópia profunda.

```js
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
