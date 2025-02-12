/* 
------------------------------------------------------------------------------------
# CLONAGEM DE ARRAYS COM concat() 

------------------------------------------------------------------------------------
## 1. Introdução
O método `concat()` é uma forma de clonar um array em JavaScript sem modificar o original. 
Ele cria uma nova instância de array contendo os elementos do array original, garantindo que 
qualquer alteração na cópia não afete os dados originais.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- O método `concat()` é tradicionalmente usado para unir arrays, mas pode ser utilizado
  para criar uma cópia do array ao concatená-lo com um array vazio (`[]`).
- Como resultado, uma nova referência de array é criada, garantindo que o original permaneça inalterado.

------------------------------------------------------------------------------------
## 3. Exemplo Prático
*/
const original = [1, 2, 3, 4];
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
## 4. Considerações Finais
- O `concat()` é uma alternativa simples para criar cópias superficiais de arrays.
- Assim como outros métodos de clonagem superficial (`slice()`, `Array.from()`, etc.),
  ele não clona referências internas em arrays aninhados.
- Para clonar estruturas mais complexas, é necessário recorrer a técnicas de clonagem profunda.
------------------------------------------------------------------------------------
*/