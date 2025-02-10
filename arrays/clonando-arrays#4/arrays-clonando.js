/* 
CLONANDO ARRAYS EM JAVASCRIPT

------------------------------------------------------------------------------------
Clonar um array significa criar uma cópia do array original sem afetar os dados originais.
Isso é útil para evitar alterações indesejadas quando manipulamos arrays em diferentes partes
do código.

Há várias formas de clonar arrays em JavaScript, dependendo das necessidades específicas
e do contexto.

------------------------------------------------------------------------------------
1. **USANDO O OPERADOR SPREAD (...)**
Esta é a maneira mais simples e moderna de clonar arrays.
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
2. **USANDO O MÉTODO slice()**
O método `slice()` retorna uma cópia superficial do array.
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
3. **USANDO Array.from()**
O método `Array.from()` cria uma nova instância de array a partir de um array ou estrutura semelhante.
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
4. **USANDO concat()**
O método `concat()` também pode ser usado para criar uma cópia do array.
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
5. **CLONAGEM PROFUNDA (DEEP COPY)**
Os métodos anteriores criam apenas cópias superficiais, o que significa que se o array contém
objetos ou arrays aninhados, as referências internas não são copiadas. Para clonar profundamente:
*/

const arrayAninhado = [1, [2, 3], { chave: 'valor' }];

// Clonagem profunda com JSON
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
EXEMPLO MAIS TRABALHADO:
Vamos criar uma função genérica que clona arrays e demonstra os diferentes níveis de clonagem.
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
RESUMO:
1. Para clonar arrays simples, use `spread`, `slice`, `Array.from`, ou `concat`.
2. Para arrays com objetos ou aninhados, use uma estratégia de clonagem profunda.
3. Escolha a abordagem de clonagem conforme a complexidade dos dados e as necessidades do código.

------------------------------------------------------------------------------------
*/
