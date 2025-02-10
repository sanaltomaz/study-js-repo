/* 
MÉTODOS PUSH E POP

------------------------------------------------------------------------------------
Os métodos **push** e **pop** são usados para adicionar e remover elementos de um array, respectivamente.

------------------------------------------------------------------------------------
MÉTODO PUSH:
O método **push** adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
let frutas = ["maçã", "banana"];
let novoComprimento = frutas.push("laranja");

console.log(frutas); 
// Resultado: ["maçã", "banana", "laranja"]

console.log(novoComprimento); 
// Resultado: 3

/* 
EXPLICAÇÃO:
1. Criamos um array chamado **frutas** com dois elementos: "maçã" e "banana".
2. O método **push** é usado para adicionar "laranja" ao final do array.
3. A função retorna o novo comprimento do array, que é 3.

------------------------------------------------------------------------------------
MÉTODO POP:
O método **pop** remove o último elemento de um array e o retorna. Este método altera o comprimento do array.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
let ultimoElemento = frutas.pop();

console.log(frutas); 
// Resultado: ["maçã", "banana"]

console.log(ultimoElemento); 
// Resultado: "laranja"

/* 
EXPLICAÇÃO:
1. Criamos um array chamado **frutas** com três elementos: "maçã", "banana" e "laranja".
2. O método **pop** remove o último elemento do array, que é "laranja".
3. A função retorna o elemento removido, que é "laranja", e o array **frutas** agora contém ["maçã", "banana"].

------------------------------------------------------------------------------------
EXEMPLO COMBOS PUSH E POP:
*/
let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros); 
// Resultado: [1, 2, 3, 4]

let removido = numeros.pop();
console.log(removido); 
// Resultado: 4

console.log(numeros); 
// Resultado: [1, 2, 3]

/* 
EXPLICAÇÃO:
1. Criamos um array chamado **numeros** com três elementos: 1, 2 e 3.
2. Usamos **push** para adicionar o número 4 ao final do array.
3. Em seguida, usamos **pop** para remover o último elemento (4) do array.
4. A função **pop** retorna o elemento removido, que é 4, e o array **numeros** volta a conter [1, 2, 3].

------------------------------------------------------------------------------------
DICAS IMPORTANTES:
1. Use **push** quando precisar adicionar elementos ao final de um array de forma eficiente.
2. Use **pop** quando precisar remover o último elemento de um array.
3. Esses métodos alteram o array original.

------------------------------------------------------------------------------------
CONCLUSÃO:
Os métodos **push** e **pop** são fundamentais para manipulação de arrays em JavaScript, permitindo adicionar e remover elementos de maneira simples e eficiente.
*/
