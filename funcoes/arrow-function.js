/* 
------------------------------------------------------------------------------------
# Arrow Functions em JavaScript

------------------------------------------------------------------------------------
## 1. Introdução
As **arrow functions** (ou funções de seta) foram introduzidas no **ES6 (ECMAScript 2015)** e oferecem uma sintaxe mais curta e concisa para escrever funções em JavaScript. 
- Elas são especialmente úteis para **funções anônimas** e **callbacks**.
- A principal diferença em relação às funções tradicionais é a **sintaxe simplificada** e o comportamento do **this**, que é herdado do contexto em que a função foi criada.

------------------------------------------------------------------------------------
## 2. Sintaxe Básica
A sintaxe de uma arrow function é composta por:
- **Parâmetros**: Podem estar entre parênteses `()` (ou sem parênteses, se houver apenas um).
- **Seta `=>`**: Substitui a palavra-chave `function`.
- **Corpo da função**: Pode ser uma expressão única (com `return` implícito) ou um bloco de código com múltiplas linhas (com `return` explícito).

### Exemplo 1: Função Simples
------------------------------------------------------------------------------------
*/
const saudacao = () => "Olá, mundo!"; // Retorna a string "Olá, mundo!"

console.log(saudacao()); 
// Resultado: "Olá, mundo!"

/* 
EXPLICAÇÃO:
1. A função não usa a palavra-chave `function`.
2. A seta `=>` substitui `function`.
3. Como o corpo da função tem apenas uma linha, o `return` é implícito.

------------------------------------------------------------------------------------
### Exemplo 2: Função com Parâmetros
------------------------------------------------------------------------------------
*/
const soma = (a, b) => a + b; // Retorna a soma de dois números

console.log(soma(5, 3)); 
// Resultado: 8

/* 
EXPLICAÇÃO:
- A função `soma` recebe dois parâmetros (`a` e `b`) e retorna sua soma.
- O `return` é implícito porque o corpo da função tem apenas uma linha.

------------------------------------------------------------------------------------
### Exemplo 3: Função com Um Parâmetro
------------------------------------------------------------------------------------
*/
const quadrado = x => x * x; // Retorna o valor de x ao quadrado

console.log(quadrado(4)); 
// Resultado: 16

/* 
EXPLICAÇÃO:
- Quando há apenas um parâmetro, os parênteses podem ser omitidos.
- O `return` é implícito.

------------------------------------------------------------------------------------
### Exemplo 4: Função com Múltiplas Linhas
------------------------------------------------------------------------------------
*/
const saudacaoPersonalizada = (nome) => {
    const mensagem = `Olá, ${nome}!`; // Monta a mensagem personalizada
    return mensagem; // Retorna a mensagem
};

console.log(saudacaoPersonalizada("Lucas")); 
// Resultado: "Olá, Lucas!"

/* 
EXPLICAÇÃO:
- Quando o corpo da função tem múltiplas linhas, as chaves `{}` são necessárias.
- O `return` deve ser explícito.

------------------------------------------------------------------------------------
## 3. Comportamento do `this`
Uma das características mais importantes das arrow functions é o comportamento do **this**:
- **Arrow functions não têm seu próprio `this`**. Em vez disso, elas **herdam o `this`** do contexto em que foram criadas.
- Isso é especialmente útil em **callbacks** e **métodos de objetos**, onde o `this` dinâmico pode causar confusão.

### Exemplo 5: Comparação entre Função Tradicional e Arrow Function
------------------------------------------------------------------------------------
*/
// Função tradicional
function Pessoa(nome) {
    this.nome = nome;
    setTimeout(function() {
        console.log(this.nome); // 'this' não se refere ao objeto Pessoa
    }, 1000);
}

const pessoa1 = new Pessoa("João");
// Resultado: undefined (porque 'this' não se refere ao objeto pessoa1)

// Arrow function
function Pessoa(nome) {
    this.nome = nome;
    setTimeout(() => {
        console.log(this.nome); // 'this' se refere ao objeto Pessoa
    }, 1000);
}

const pessoa2 = new Pessoa("Lucas");
// Resultado: "Lucas" (porque 'this' é herdado do contexto da função)

/* 
EXPLICAÇÃO:
- Na função tradicional, o `this` dentro do `setTimeout` não se refere ao objeto `Pessoa`.
- Na arrow function, o `this` é herdado do contexto onde a função foi criada, mantendo a referência correta.

------------------------------------------------------------------------------------
## 4. Casos de Uso Comuns

### Exemplo 6: Callbacks
------------------------------------------------------------------------------------
*/
const numeros = [1, 2, 3, 4, 5];

// Usando arrow function para dobrar os valores
const dobrados = numeros.map(num => num * 2);

console.log(dobrados); 
// Resultado: [2, 4, 6, 8, 10]

/* 
EXPLICAÇÃO:
- Arrow functions são ideais para callbacks, como no método `map`, devido à sintaxe concisa.

------------------------------------------------------------------------------------
### Exemplo 7: Funções Anônimas
------------------------------------------------------------------------------------
*/
const botao = document.querySelector("button");

botao.addEventListener("click", () => {
    console.log("Botão clicado!");
});

/* 
EXPLICAÇÃO:
- Arrow functions são frequentemente usadas como funções anônimas em eventos.

------------------------------------------------------------------------------------
## 5. Limitações das Arrow Functions

1. **Não possuem `arguments`**:
   - Arrow functions não têm o objeto `arguments`. Para acessar todos os argumentos, use o operador **rest** (`...`).

   Exemplo:
   */
   const somaRest = (...args) => args.reduce((acc, val) => acc + val, 0);

   console.log(somaRest(1, 2, 3, 4)); 
   // Resultado: 10

/*
2. **Não podem ser usadas como construtores**:
   - Arrow functions não podem ser chamadas com `new`, pois não possuem a propriedade `prototype`.

   Exemplo:
   */
   const CriarPessoa = (nome) => {
       this.nome = nome; // Erro: Arrow functions não podem ser construtores
   };

   // const pessoa = new CriarPessoa("João"); // Isso causará um erro

/*
3. **Não são ideais para métodos de objetos**:
   - Como o `this` é herdado, arrow functions não são recomendadas para métodos de objetos que dependem de `this` dinâmico.

   Exemplo:
   */
   const objeto = {
       valor: 42,
       metodoTradicional: function() {
           console.log(this.valor); // 'this' se refere ao objeto
       },
       metodoArrow: () => {
           console.log(this.valor); // 'this' não se refere ao objeto
       }
   };

   objeto.metodoTradicional(); // Resultado: 42
   objeto.metodoArrow(); // Resultado: undefined

/* 
------------------------------------------------------------------------------------
## 6. Considerações Finais

- **Quando usar**:
  - Para funções curtas e simples, especialmente em callbacks e funções anônimas.
  - Quando você precisa manter o contexto de `this` do escopo externo.

- **Quando evitar**:
  - Em métodos de objetos que dependem de `this` dinâmico.
  - Em funções que precisam ser usadas como construtores.

- **Dicas**:
  - Use arrow functions para melhorar a legibilidade do código em situações apropriadas.
  - Evite o aninhamento excessivo de arrow functions para manter o código claro.

------------------------------------------------------------------------------------
*/