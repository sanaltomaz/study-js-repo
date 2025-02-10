/* 
ESTRUTURA DE LOOP FOR...IN EM JAVASCRIPT

------------------------------------------------------------------------------------
DEFINIÇÃO:
O loop **for...in** em JavaScript é uma estrutura de controle que permite a iteração sobre 
as propriedades enumeráveis de um objeto. Ele é frequentemente usado para iterar sobre 
as chaves (propriedades) de um objeto literal.

------------------------------------------------------------------------------------
SINTAXE:
A sintaxe básica de um loop **for...in** é:

for (variável in objeto) {
  // Bloco de código a ser executado
}

1. **variável**: Uma variável que será atribuída a cada propriedade do objeto durante a iteração.
2. **objeto**: O objeto cujas propriedades serão iteradas.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO COM OBJETOS:
*/

const pessoa = {
    nome: "Ana",
    idade: 25,
    cidade: "São Paulo"
  };
  
for (const chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
// Resultado: 
// nome Ana
// idade 25
// cidade São Paulo

/* 
EXPLICAÇÃO:
1. Declaramos um objeto chamado **pessoa** com três propriedades: **nome**, **idade** e **cidade**.
2. O loop **for...in** itera sobre cada propriedade do objeto **pessoa**.
3. A cada iteração, a chave da propriedade atual é atribuída à variável **chave**.
4. O bloco de código dentro do loop (`console.log(chave, pessoa[chave])`) é executado para cada propriedade do objeto.
*/

/* 
------------------------------------------------------------------------------------
EXEMPLO COM ARRAYS:
Embora o loop **for...in** possa ser utilizado para iterar sobre arrays, ele não é recomendado para esse propósito, 
pois itera sobre os índices do array e não sobre os valores. 

Vamos ver um exemplo:
*/

const numeros = [1, 2, 3, 4, 5];

for (const indice in numeros) {
  console.log(indice, numeros[indice]);
}
// Resultado: 
// 0 1
// 1 2
// 2 3
// 3 4
// 4 5

/* 
EXPLICAÇÃO:
1. Declaramos um array chamado **numeros** com cinco elementos.
2. O loop **for...in** itera sobre os índices do array **numeros**.
3. A cada iteração, o índice do elemento atual é atribuído à variável **indice**.
4. O bloco de código dentro do loop (`console.log(indice, numeros[indice])`) é executado para cada índice do array.
*/

/* 
------------------------------------------------------------------------------------
USANDO FOR...IN COM OBJETOS ANINHADOS:
O loop **for...in** pode ser utilizado para iterar sobre propriedades de objetos aninhados.
*/

const empresa = {
  nome: "Tech Corp",
  endereco: {
    rua: "Av. Principal",
    numero: 123,
    cidade: "Rio de Janeiro"
  }
};

for (const prop in empresa.endereco) {
  console.log(prop, empresa.endereco[prop]);
}
// Resultado: 
// rua Av. Principal
// numero 123
// cidade Rio de Janeiro

/* 
EXPLICAÇÃO:
1. Declaramos um objeto chamado **empresa** com uma propriedade aninhada **endereco**.
2. O loop **for...in** itera sobre cada propriedade do objeto **endereco**.
3. A cada iteração, a chave da propriedade atual é atribuída à variável **prop**.
4. O bloco de código dentro do loop (`console.log(prop, empresa.endereco[prop])`) é executado 
   para cada propriedade do objeto aninhado.
*/

/* 
------------------------------------------------------------------------------------
DICAS IMPORTANTES:
1. O loop **for...in** é ideal para iterar sobre propriedades de objetos literais.
2. Não é recomendado para iterar sobre arrays, pois itera sobre os índices e não sobre os valores.
3. Certifique-se de que a iteração seja sobre propriedades enumeráveis do objeto.

------------------------------------------------------------------------------------
CONCLUSÃO:
O loop **for...in** é uma ferramenta útil em JavaScript para iterar sobre as propriedades enumeráveis de um objeto.
Ele oferece uma maneira direta de acessar e manipular as chaves e valores de um objeto, 
tornando-o ideal para trabalhar com objetos literais.
*/
  
  