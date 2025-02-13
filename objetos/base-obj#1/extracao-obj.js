/* 
====================================================================================
# COMO EXTRAIR CHAVES E VALORES DE UM OBJETO EM JAVASCRIPT
====================================================================================
Em JavaScript, podemos extrair as chaves (keys) e os valores (values) de um objeto usando 
métodos nativos como `Object.keys()`, `Object.values()` e `Object.entries()`.
Esses métodos são muito úteis para manipular e iterar sobre objetos dinamicamente.

====================================================================================
# 1. EXTRAINDO CHAVES DE UM OBJETO COM Object.keys()
====================================================================================
O método `Object.keys(objeto)` retorna um array contendo todas as chaves do objeto.
*/

const usuario = {
    nome: "Ana",
    idade: 30,
    cidade: "Rio de Janeiro"
};

const chaves = Object.keys(usuario);
console.log(chaves); // Saída: ["nome", "idade", "cidade"]

/* 
====================================================================================
# 2. EXTRAINDO VALORES DE UM OBJETO COM Object.values()
====================================================================================
O método `Object.values(objeto)` retorna um array contendo todos os valores das propriedades do objeto.
*/

const valores = Object.values(usuario);
console.log(valores); // Saída: ["Ana", 30, "Rio de Janeiro"]

/* 
====================================================================================
# 3. EXTRAINDO CHAVES E VALORES COM Object.entries()
====================================================================================
O método `Object.entries(objeto)` retorna um array de arrays, onde cada sub-array contém 
um par `[chave, valor]`.
*/

const entradas = Object.entries(usuario);
console.log(entradas); // Saída: [["nome", "Ana"], ["idade", 30], ["cidade", "Rio de Janeiro"]]

/* 
====================================================================================
# 4. ITERANDO SOBRE AS CHAVES E VALORES
====================================================================================
Podemos usar `forEach()` para percorrer o array retornado por `Object.entries()` e manipular os dados.
*/

Object.entries(usuario).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
});
// Saída:
// nome: Ana
// idade: 30
// cidade: Rio de Janeiro

/* 
====================================================================================
# 5. USO PRÁTICO: CONVERTENDO OBJETO EM ARRAY PARA MANIPULAÇÃO DINÂMICA
====================================================================================
Podemos transformar um objeto em um array e manipulá-lo facilmente.
*/

const precos = {
    banana: 2.5,
    maca: 3.0,
    laranja: 2.8
};

// Criando um array formatado de strings
const listaPrecos = Object.entries(precos).map(([fruta, preco]) => {
    return `${fruta}: R$${preco.toFixed(2)}`;
});

console.log(listaPrecos); // Saída: ["banana: R$2.50", "maca: R$3.00", "laranja: R$2.80"]

/* 
====================================================================================
# 6. RESUMO
====================================================================================
- `Object.keys(objeto)`: Retorna um array com todas as chaves do objeto.
- `Object.values(objeto)`: Retorna um array com todos os valores do objeto.
- `Object.entries(objeto)`: Retorna um array de pares `[chave, valor]`.
- Podemos iterar sobre `Object.entries()` para manipular os dados dinamicamente.
====================================================================================
*/

