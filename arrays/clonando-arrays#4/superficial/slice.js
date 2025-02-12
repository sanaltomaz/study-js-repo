/* 
------------------------------------------------------------------------------------
# CLONAGEM DE ARRAYS COM O MÉTODO slice()
------------------------------------------------------------------------------------

## 1. Introdução
O método `slice()` é uma forma simples de criar uma cópia superficial de um array em JavaScript. 
Ele retorna um novo array contendo os mesmos elementos do array original, sem modificar o original.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição**: `slice()` retorna uma cópia de parte ou de todo um array.
- **Sintaxe**: `array.slice([início, fim])`
  - `início` (opcional): Índice onde a extração começa. O padrão é `0`.
  - `fim` (opcional): Índice onde a extração termina (não incluído na cópia).
  - Se nenhum parâmetro for passado, o método copia o array inteiro.
- **Tipo de clonagem**: Superficial (objetos e arrays aninhados são copiados por referência).

------------------------------------------------------------------------------------
## 3. Exemplo Prático
*/

const original = [1, 2, 3, 4];
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
## 4. Considerações Finais
- O método `slice()` é uma forma eficiente de criar cópias de arrays.
- Ele deve ser usado para clonagem superficial, pois não copia objetos ou arrays aninhados profundamente.
- Caso precise de uma clonagem profunda, utilize `JSON.parse(JSON.stringify(array))` ou outra abordagem.
------------------------------------------------------------------------------------
*/
