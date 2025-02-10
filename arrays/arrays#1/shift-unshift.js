/* 
MÉTODOS SHIFT E UNSHIFT

------------------------------------------------------------------------------------
Os métodos **shift** e **unshift** são usados para remover e adicionar elementos no início de um array, respectivamente.

------------------------------------------------------------------------------------
MÉTODO SHIFT:
O método **shift** remove o primeiro elemento de um array e o retorna. Este método altera o comprimento do array.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
let frutas = ["maçã", "banana", "laranja"];
let primeiroElemento = frutas.shift();

console.log(frutas); 
// Resultado: ["banana", "laranja"]

console.log(primeiroElemento); 
// Resultado: "maçã"

/* 
EXPLICAÇÃO:
1. Criamos um array chamado **frutas** com três elementos: "maçã", "banana" e "laranja".
2. O método **shift** remove o primeiro elemento do array, que é "maçã".
3. A função retorna o elemento removido, que é "maçã", e o array **frutas** agora contém ["banana", "laranja"].

------------------------------------------------------------------------------------
MÉTODO UNSHIFT:
O método **unshift** adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
let novoComprimento = frutas.unshift("uva");

console.log(frutas); 
// Resultado: ["uva", "banana", "laranja"]

console.log(novoComprimento); 
// Resultado: 3

/* 
EXPLICAÇÃO:
1. Criamos um array chamado **frutas** com dois elementos: "banana" e "laranja".
2. O método **unshift** é usado para adicionar "uva" ao início do array.
3. A função retorna o novo comprimento do array, que é 3.

------------------------------------------------------------------------------------
EXEMPLO COMBOS SHIFT E UNSHIFT:
*/
let numeros = [2, 3, 4];
numeros.unshift(1);
console.log(numeros); 
// Resultado: [1, 2, 3, 4]

let removido = numeros.shift();
console.log(removido); 
// Resultado: 1

console.log(numeros); 
// Resultado: [2, 3, 4]

/* 
EXPLICAÇÃO:
1. Criamos um array chamado **numeros** com três elementos: 2, 3 e 4.
2. Usamos **unshift** para adicionar o número 1 ao início do array.
3. Em seguida, usamos **shift** para remover o primeiro elemento (1) do array.
4. A função **shift** retorna o elemento removido, que é 1, e o array **numeros** volta a conter [2, 3, 4].

------------------------------------------------------------------------------------
DICAS IMPORTANTES:
1. Use **unshift** quando precisar adicionar elementos ao início de um array de forma eficiente.
2. Use **shift** quando precisar remover o primeiro elemento de um array.
3. Esses métodos alteram o array original.

------------------------------------------------------------------------------------
CONCLUSÃO:
Os métodos **shift** e **unshift** são essenciais para manipulação de arrays em JavaScript, permitindo adicionar e remover elementos do início do array de maneira simples e eficiente.
*/
