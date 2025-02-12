/* 
------------------------------------------------------------------------------------
# CLONAGEM PROFUNDA COM JSON.parse() E JSON.stringify()
------------------------------------------------------------------------------------

## 1. Introdução
A clonagem profunda é necessária quando um array contém objetos ou subarrays aninhados. 
A abordagem com `JSON.parse(JSON.stringify())` permite criar uma cópia completa do array, 
garantindo que alterações na cópia não afetem o original.

------------------------------------------------------------------------------------
## 2. Funcionamento
- **`JSON.stringify()`** converte um objeto JavaScript em uma string JSON.
- **`JSON.parse()`** reconverte essa string JSON em um novo objeto JavaScript.
- Como resultado, cria-se uma nova estrutura de dados independente, sem referências ao array original.

**Limitações:**
- Não funciona corretamente para funções, valores `undefined` e propriedades `Symbol`.
- Pode ter problemas com objetos que contenham referências circulares.

------------------------------------------------------------------------------------
## 3. Exemplo Prático
------------------------------------------------------------------------------------
*/

const arrayAninhado = [1, [2, 3], { chave: 'valor' }];

// Criando uma cópia profunda
const copiaProfunda = JSON.parse(JSON.stringify(arrayAninhado));

console.log(copiaProfunda);
// Resultado: [1, [2, 3], { chave: 'valor' }]

// Modificando a cópia profunda
copiaProfunda[1][0] = 99;
copiaProfunda[2].chave = 'novo valor';

console.log(arrayAninhado);
// Resultado: [1, [2, 3], { chave: 'valor' }] (não foi alterado)
console.log(copiaProfunda);
// Resultado: [1, [99, 3], { chave: 'novo valor' }]

/*
------------------------------------------------------------------------------------
## 4. Considerações Finais
- `JSON.parse(JSON.stringify())` é uma solução simples para clonagem profunda.
- Funciona bem para arrays contendo objetos aninhados, mas tem limitações com tipos específicos de dados.
- Para maior flexibilidade, considere bibliotecas como `Lodash` (`_.cloneDeep`).
------------------------------------------------------------------------------------
*/
