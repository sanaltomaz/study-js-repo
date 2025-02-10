/* 
ARRAYS EM JAVASCRIPT

------------------------------------------------------------------------------------
DEFINIÇÃO:
Arrays são estruturas de dados que podem armazenar múltiplos valores em uma única variável. 
Eles são usados para organizar dados relacionados e podem conter elementos de diferentes tipos, 
como números, strings, objetos e até mesmo outros arrays.

------------------------------------------------------------------------------------
DECLARAÇÃO E INICIALIZAÇÃO:
*/
let numeros = [1, 2, 3, 4, 5];
let frutas = ["Maçã", "Banana", "Laranja"];
let misturado = [1, "Maçã", true, { nome: "João" }, [1, 2, 3]];

console.log(numeros); // Resultado: [1, 2, 3, 4, 5]
console.log(frutas); // Resultado: ["Maçã", "Banana", "Laranja"]
console.log(misturado); // Resultado: [1, "Maçã", true, { nome: "João" }, [1, 2, 3]]

/* 
EXPLICAÇÃO:
1. Criamos três arrays diferentes: **numeros**, **frutas** e **misturado**.
2. O array **numeros** contém apenas números.
3. O array **frutas** contém apenas strings.
4. O array **misturado** contém elementos de diferentes tipos: um número, uma string, um valor booleano, um objeto e um outro array.

------------------------------------------------------------------------------------
ACESSANDO ELEMENTOS:
*/
console.log(numeros[0]); // Resultado: 1
console.log(frutas[1]); // Resultado: "Banana"
console.log(misturado[3].nome); // Resultado: "João"

/* 
EXPLICAÇÃO:
1. Podemos acessar elementos individuais de um array usando o índice do elemento.
2. O índice de um array começa em 0, então **numeros[0]** acessa o primeiro elemento do array **numeros**.
3. **frutas[1]** acessa o segundo elemento do array **frutas**.
4. **misturado[3].nome** acessa a propriedade **nome** do objeto localizado na quarta posição do array **misturado**.

------------------------------------------------------------------------------------
MÉTODOS DE ARRAYS:
*/
numeros.push(6); // Adiciona um elemento ao final do array
frutas.pop(); // Remove o último elemento do array
misturado.shift(); // Remove o primeiro elemento do array

console.log(numeros); // Resultado: [1, 2, 3, 4, 5, 6]
console.log(frutas); // Resultado: ["Maçã", "Banana"]
console.log(misturado); // Resultado: ["Maçã", true, { nome: "João" }, [1, 2, 3]]

/* 
EXPLICAÇÃO:
1. O método **push** adiciona um novo elemento ao final do array.
2. O método **pop** remove o último elemento do array.
3. O método **shift** remove o primeiro elemento do array.

------------------------------------------------------------------------------------
DICAS IMPORTANTES:
1. Arrays em JavaScript são objetos e, portanto, podem ter propriedades e métodos.
2. O comprimento (length) de um array pode ser acessado usando a propriedade **length**.
3. Arrays podem conter elementos de diferentes tipos, incluindo outros arrays, o que permite a criação de estruturas de dados complexas.

------------------------------------------------------------------------------------
CONCLUSÃO:
Arrays são uma estrutura de dados fundamental em JavaScript, permitindo o armazenamento e manipulação de múltiplos valores relacionados em uma única variável.
Eles oferecem diversos métodos e propriedades úteis para trabalhar com conjuntos de dados de forma eficiente e organizada.

*/