/* 
------------------------------------------------------------------------------------
# CLONAGEM DE ARRAYS COM OPERADOR SPREAD (...)
------------------------------------------------------------------------------------

## 1. Introdução
O operador spread (`...`) é uma das maneiras mais simples e eficientes de clonar arrays em JavaScript. 
Ele permite criar uma cópia superficial do array original, garantindo que mudanças feitas na cópia
não afetem o array original.

------------------------------------------------------------------------------------
## 2. Funcionamento do Operador Spread
O operador spread desestrutura os elementos de um array e os insere em um novo array. 
Isso cria uma cópia independente dos valores, mas não dos objetos internos, caso existam.

------------------------------------------------------------------------------------
## 3. Exemplo Prático
Criando uma cópia de um array usando o operador spread:
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
## 4. Considerações
- O operador spread é eficiente para arrays simples.
- Ele realiza apenas uma cópia superficial. Se o array contém objetos ou arrays aninhados, as referências internas
  continuam apontando para os mesmos objetos, ou seja, modificações em elementos internos afetam o original.
------------------------------------------------------------------------------------
*/
