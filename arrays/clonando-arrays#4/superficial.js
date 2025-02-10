/* 
------------------------------------------------------------------------------------
# CLONAGEM SUPERFICIAL DE ARRAYS

------------------------------------------------------------------------------------
## 1. Introdução
A clonagem superficial de arrays refere-se à criação de uma cópia de um array sem modificar o array original. 
No entanto, se o array contiver objetos ou arrays internos, as referências a esses elementos são copiadas, 
não os próprios objetos ou arrays.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição básica**: A clonagem superficial cria uma cópia de nível superior de um array, 
  sem alterar o array original. Os valores internos, como objetos ou outros arrays, ainda são referenciados.
- **Quando usar**: Deve ser utilizada quando você não precisa de uma cópia independente de arrays ou objetos aninhados.
- **Benefícios**: Simplicidade e desempenho, especialmente quando os dados não contêm estruturas complexas aninhadas.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Usando o Operador Spread (...)
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
### Exemplo 2: Usando o Método slice()
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
### Exemplo 3: Usando Array.from()
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
### Exemplo 4: Usando concat()
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
## 4. Considerações Finais
- A clonagem superficial é útil quando se quer criar uma cópia simples de um array sem alterar o original.
- Em casos de arrays contendo objetos ou arrays aninhados, a clonagem superficial pode não ser suficiente, 
  pois as referências para esses elementos são copiadas.
------------------------------------------------------------------------------------
*/
