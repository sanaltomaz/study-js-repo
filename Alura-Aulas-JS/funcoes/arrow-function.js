/* 
ARROW FUNCTIONS

------------------------------------------------------------------------------------
As arrow functions (ou funções de seta) foram introduzidas no ES6 e fornecem uma 
forma mais curta e concisa de escrever funções em JavaScript.

A principal diferença em relação às funções tradicionais (declarações e expressões) 
é a sintaxe simplificada e a maneira como elas lidam com o contexto de **this**.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
const saudacao = () => {
    return "Olá, mundo!"; // Retorna a string "Olá, mundo!"
};

console.log(saudacao()); 
// Resultado: "Olá, mundo!"

/* 
EXPLICAÇÃO:
1. A função não tem a palavra-chave **function**, mas ainda realiza a mesma tarefa.
2. A seta **=>** substitui a palavra-chave **function**.
3. Quando a função tem apenas uma linha de código no corpo, podemos omitir a palavra **return**.

------------------------------------------------------------------------------------
EXEMPLO COM PARÂMETROS:
*/
const soma = (a, b) => a + b; // A função soma retorna a soma de dois números

console.log(soma(5, 3)); 
// Resultado: 8

console.log(soma(10, 20)); 
// Resultado: 30

// EXPLICAÇÃO:
// Com apenas uma linha de código, a palavra-chave **return** é implícita.
// A função **soma** recebe dois parâmetros (**a** e **b**) e retorna sua soma.

/*
------------------------------------------------------------------------------------
EXEMPLO COM UM PARÂMETRO:
Se a função tiver apenas um parâmetro, os parênteses podem ser omitidos.
*/
const quadrado = x => x * x; // A função quadrado retorna o valor de x ao quadrado

console.log(quadrado(4)); 
// Resultado: 16

// EXPLICAÇÃO:
// A função **quadrado** recebe um parâmetro **x** e retorna **x * x**.
// Como temos apenas um parâmetro, podemos omitir os parênteses.

/*
------------------------------------------------------------------------------------
EXEMPLO COM FUNÇÃO DE MÚLTIPLAS LINHAS:
Caso a função tenha múltiplas linhas, a sintaxe do **return** precisa ser explicitada.
*/
const saudacaoPersonalizada = (nome) => {
    const mensagem = `Olá, ${nome}!`; // Monta a mensagem personalizada
    return mensagem; // Retorna a mensagem
};

console.log(saudacaoPersonalizada("Lucas")); 
// Resultado: "Olá, Lucas!"

/* 
EXPLICAÇÃO:
1. O código dentro das chaves agora contém múltiplas instruções.
2. A palavra-chave **return** é necessária para devolver um valor.

------------------------------------------------------------------------------------
CARACTERÍSTICAS IMPORTANTES DAS ARROW FUNCTIONS:

1. **Sintaxe mais concisa**: Elimina a necessidade de usar a palavra-chave **function**.
   A seta **=>** torna o código mais enxuto e legível.

2. **Implicação do return**: Quando a função tem uma única linha de código, o **return** é implícito.
   Isso a torna ideal para funções curtas e simples.

3. **Não tem seu próprio this**: As arrow functions **não têm** seu próprio contexto de **this**.
   Elas **herdam o this** do contexto em que foram criadas, o que pode ser útil
   quando você quer manter o valor de **this** em callbacks.

------------------------------------------------------------------------------------
EXEMPLO DE USO DO THIS:
Com funções tradicionais, o **this** muda dependendo de como a função é chamada.
Já nas arrow functions, o **this** permanece o mesmo de onde a função foi criada.

Usando uma função tradicional:
*/
function Pessoa(nome) {
    this.nome = nome;
    setTimeout(function() {
        console.log(this.nome); // 'this' aqui não se refere ao objeto Pessoa
    }, 1000);
}

const pessoa1 = new Pessoa("João");
// Resultado: undefined (porque 'this' não se refere ao objeto pessoa1)

/* 
Usando uma arrow function:
*/
function Pessoa(nome) {
    this.nome = nome;
    setTimeout(() => {
        console.log(this.nome); // 'this' aqui se refere ao objeto Pessoa
    }, 1000);
}

const pessoa2 = new Pessoa("Lucas");
// Resultado: "Lucas" (porque 'this' é mantido pelo contexto da função)

/* 
------------------------------------------------------------------------------------
DICAS IMPORTANTES:

1. **Use arrow functions para funções pequenas e callbacks**, pois a sintaxe mais curta
   torna o código mais legível.

2. Evite usá-las para métodos de objetos que dependem de **this** dinâmico. Como as arrow functions 
   **herdam o this**, em métodos, você pode preferir funções tradicionais para garantir o contexto correto.

3. A **simplicidade** da sintaxe também significa que **arrow functions** não possuem 
   algumas funcionalidades avançadas, como **hoisting** e **construtores** (não podem ser usadas com **new**).

------------------------------------------------------------------------------------
CURIOSIDADE EXTRA:

- As arrow functions não possuem o objeto **arguments** (que contém os argumentos passados para a função).
  Para acessar os argumentos, é necessário utilizar o operador **rest** (...).

Exemplo:
*/
const somaRest = (...args) => args.reduce((acc, val) => acc + val, 0); // Soma todos os argumentos passados

console.log(somaRest(1, 2, 3, 4)); 
// Resultado: 10

/* 
Aqui, o operador **rest** captura todos os argumentos passados para a função em um array.
E, em seguida, a função **reduce** é usada para somá-los.
*/
