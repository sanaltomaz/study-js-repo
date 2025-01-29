/* 
ARRAYS TRUTHY OU FALSY EM JAVASCRIPT

------------------------------------------------------------------------------------
No JavaScript, valores "truthy" e "falsy" determinam como um valor é interpretado
em um contexto booleano (como em condições de if).

- **Truthy**: Qualquer valor que é avaliado como verdadeiro.
- **Falsy**: Qualquer valor que é avaliado como falso. Existem apenas 6 valores falsy no JavaScript:
  - `false`
  - `0`
  - `""` (string vazia)
  - `null`
  - `undefined`
  - `NaN`

Os arrays são considerados **truthy**, mesmo quando estão vazios ou não contêm valores úteis.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
const arrayVazio = []; 
const arrayComValores = [1, 2, 3];

if (arrayVazio) {
  console.log("Arrays vazios são truthy!");
  // Será executado
}

if (arrayComValores) {
  console.log("Arrays com valores também são truthy!");
  // Será executado
}

/* 
EXPLICAÇÃO:
1. Mesmo que `arrayVazio` não contenha elementos, ele ainda é avaliado como truthy.
2. Arrays em JavaScript, independentemente de estarem vazios ou não, sempre são truthy.

------------------------------------------------------------------------------------
DETECTANDO ARRAYS VAZIOS:
Embora arrays vazios sejam truthy, você pode verificar se eles realmente contêm elementos usando a propriedade `length`.
*/

if (arrayVazio.length === 0) {
  console.log("Este array está vazio.");
}

if (arrayComValores.length > 0) {
  console.log("Este array contém elementos.");
}

/* 
------------------------------------------------------------------------------------
EXEMPLO MAIS TRABALHADO:
Vamos verificar arrays truthy/falsy em uma lógica mais complexa.
*/

const arrays = [
  [], [0], [null], [""], undefined, null, 0, "", NaN
];

arrays.forEach((elemento, index) => {
  if (elemento) {
    console.log(`Índice ${index}: Truthy -`, elemento);
  } else {
    console.log(`Índice ${index}: Falsy -`, elemento);
  }
});

/* 
EXPLICAÇÃO:
1. Usamos o método `forEach` para iterar sobre o array `arrays`.
2. Para cada elemento, verificamos se ele é truthy ou falsy.
3. O console exibe o resultado com o índice e o valor correspondente.

------------------------------------------------------------------------------------
CAUTELA AO VERIFICAR ARRAYS:
Embora arrays sejam sempre truthy, é comum cometer erros ao verificar valores dentro deles. Exemplo:
*/
const possivelFalsy = [false];

if (possivelFalsy) {
  console.log("Este array é truthy, mesmo contendo valores falsy dentro dele!");
}

/*
Neste caso, o array `possivelFalsy` é truthy porque ele é um objeto (e não o valor interno que ele contém).

------------------------------------------------------------------------------------
CASO AVANÇADO: FILTRANDO VALORES FALSY DE UM ARRAY
Podemos usar o método `filter` para remover valores falsy de um array.
*/

const valores = [0, "", null, undefined, NaN, false, "Texto", 42, true];
const valoresTruthy = valores.filter(valor => valor);

console.log(valoresTruthy);
// Resultado: ["Texto", 42, true]

/* 
EXPLICAÇÃO:
1. O método `filter` cria um novo array com os elementos truthy do array original.
2. Valores falsy como `0`, `""`, `null`, `undefined`, `NaN` e `false` foram removidos.

------------------------------------------------------------------------------------
RESUMO:
1. Arrays são sempre truthy em JavaScript, mesmo quando estão vazios.
2. Para verificar se um array contém elementos, use a propriedade `length`.
3. O conteúdo interno de um array pode conter valores falsy, mas isso não afeta o status truthy do array em si.
4. Métodos como `filter` ajudam a processar e manipular arrays para remover valores falsy.

Entender a diferença entre arrays truthy e falsy ajuda a evitar erros comuns ao lidar com lógica condicional em JavaScript.

------------------------------------------------------------------------------------
*/
