/* 
====================================================================================
# PROPRIEDADES DE UM OBJETO EM JAVASCRIPT
====================================================================================

As propriedades de um objeto em JavaScript são pares chave-valor que armazenam 
informações dentro do objeto. Elas podem conter diferentes tipos de dados, 
incluindo números, strings, funções e até mesmo outros objetos.

====================================================================================
# 1. ATRIBUTOS DAS PROPRIEDADES
====================================================================================
Cada propriedade de um objeto possui três atributos principais:
- **Valor (`value`)**: O dado armazenado na propriedade.
- **Enumerável (`enumerable`)**: Define se a propriedade pode ser percorrida em loops.
- **Configuração (`configurable`)**: Define se a propriedade pode ser deletada ou modificada.
- **Gravável (`writable`)**: Define se o valor da propriedade pode ser alterado.

====================================================================================
# 2. CRIAÇÃO E ACESSO A PROPRIEDADES
====================================================================================
Podemos definir e acessar propriedades de um objeto de diferentes formas:
*/

// Criando um objeto
const pessoa = {
    nome: "Alice",
    idade: 25,
    profissao: "Desenvolvedora"
};

// Acessando propriedades
console.log(pessoa.nome);       // "Alice" (Acesso via notação de ponto)
console.log(pessoa["idade"]);   // 25 (Acesso via colchetes)

/* 
====================================================================================
# 3. TIPOS DE PROPRIEDADES
====================================================================================
*/

// 3.1. PROPRIEDADES ESTÁTICAS
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

// 3.2. PROPRIEDADES DINÂMICAS (Adicionadas em tempo de execução)
const usuario = {};
usuario.nome = "Carlos";
usuario.idade = 30;

console.log(usuario); // { nome: "Carlos", idade: 30 }

// 3.3. PROPRIEDADES COMPUTADAS (Criadas com valores dinâmicos)
const chave = "email";
const cliente = {
    nome: "João",
    [chave]: "joao@email.com"
};

console.log(cliente.email); // "joao@email.com"

/* 
====================================================================================
# 4. REMOVENDO PROPRIEDADES
====================================================================================
Podemos remover propriedades usando `delete`.
*/

delete pessoa.idade;
console.log(pessoa); // { nome: "Alice", profissao: "Desenvolvedora" }

/* 
====================================================================================
# 5. VERIFICANDO A EXISTÊNCIA DE UMA PROPRIEDADE
====================================================================================
Podemos usar `in` ou `hasOwnProperty()` para verificar se uma propriedade existe.
*/

console.log("nome" in pessoa);            // true
console.log(pessoa.hasOwnProperty("idade")); // false (pois foi deletada)

/* 
====================================================================================
# 6. RESUMO
====================================================================================
- Propriedades são pares chave-valor armazenados em objetos.
- Podemos acessar, adicionar, modificar e excluir propriedades.
- Existem propriedades estáticas, dinâmicas e computadas.
- Métodos como `in` e `hasOwnProperty()` permitem verificar se uma propriedade existe.

====================================================================================
*/

