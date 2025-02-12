/* 
------------------------------------------------------------------------------------
# CLONAGEM DE ARRAYS COM O MÉTODO Array.from()
------------------------------------------------------------------------------------

## 1. Introdução
O método `Array.from()` permite criar uma nova instância de um array a partir de um array ou
uma estrutura semelhante a um array (como um objeto iterável). Esse método é útil para
clonar arrays sem modificar o original.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição**: `Array.from(arrayOriginal)` cria um novo array copiando os elementos
do array original.
- **Tipo de clonagem**: Superficial, ou seja, se o array contiver objetos ou arrays aninhados,
a referência desses elementos será mantida.
- **Quando usar**: Quando se deseja criar uma cópia independente dos elementos de nível superior
de um array, sem modificar o original.

------------------------------------------------------------------------------------
## 3. Exemplo Prático
*/

const original = [1, 2, 3, 4];
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
## 4. Considerações Finais
- O `Array.from()` é uma abordagem simples e eficiente para clonar arrays.
- A clonagem é superficial, então objetos internos ainda compartilham a mesma referência.
- Para cópias profundas, métodos como `JSON.parse(JSON.stringify(obj))` devem ser usados.
------------------------------------------------------------------------------------
*/
