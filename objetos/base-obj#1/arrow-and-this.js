/*
====================================================================================
# ARROW FUNCTIONS E O `this` EM OBJETOS
====================================================================================
## 1. Introdução
As **Arrow Functions** são uma forma mais curta de definir funções em JavaScript. 
Elas possuem um comportamento especial em relação ao `this`, que pode influenciar seu uso dentro de objetos.

O `this` dentro de um objeto pode se comportar de maneira diferente dependendo do tipo de função utilizada. 
Vamos explorar esses conceitos separadamente e depois combiná-los em exemplos práticos.

====================================================================================
# 2. Arrow Functions em Objetos
====================================================================================
    Como as Arrow Functions funcionam dentro de um objeto?
As **Arrow Functions** não possuem seu próprio `this`, ao contrário das funções tradicionais.
O valor do `this` dentro de uma arrow function é determinado pelo contexto léxico (o escopo onde a função foi definida).
*/

const objeto = {
    nome: "Alice",
    falar: () => {
      console.log(`Olá, meu nome é ${this.nome}`);
    },
};

objeto.falar(); // Resultado: "Olá, meu nome é undefined" (pois `this` não se refere ao objeto)

/*
Explicação:
- Como uma **arrow function** não tem seu próprio `this`, ele referencia o `this` do escopo externo.
- No caso acima, esse escopo externo não é o objeto `objeto`, mas sim o escopo global, onde `this.nome` é `undefined`.

====================================================================================
## 3. O Comportamento do `this` em Funções Tradicionais vs Arrow Functions
====================================================================================
*/

const pessoa = {
  nome: "Carlos",
  falar: function () {
    console.log(`Olá, meu nome é ${this.nome}`);
  },
};

pessoa.falar(); // Resultado: "Olá, meu nome é Carlos" (o `this` se refere ao objeto `pessoa`)

/*
Explicação:
- Aqui estamos usando uma **função tradicional**, que tem seu próprio `this` baseado no objeto que a chama.
- Como `pessoa.falar()` está sendo chamado no contexto do objeto `pessoa`, `this` se refere corretamente ao objeto.

====================================================================================
## 4. Combinando Arrow Functions e `this`
====================================================================================
Embora as **Arrow Functions** não tenham seu próprio `this`, podemos usá-las de forma estratégica.
Por exemplo, podemos armazenar `this` em uma variável ou usá-las em métodos que não precisam acessar `this` diretamente.
*/

const usuario = {
  nome: "Mariana",
  saudacao: function () {
    setTimeout(() => {
      console.log(`Oi, eu sou ${this.nome}`);
    }, 1000);
  },
};

usuario.saudacao();// Após 1 segundo: "Oi, eu sou Mariana"

/*
Explicação:
- A função `setTimeout` é executada em um contexto global, mas como usamos uma **Arrow Function**, ela não redefine `this`.
- Assim, o `this` dentro de `setTimeout` continua se referindo ao objeto `usuario`.

====================================================================================
## 5. Considerações Finais
- As **Arrow Functions** não têm seu próprio `this`, elas herdam o `this` do escopo onde foram definidas.
- Para métodos de objeto que precisam acessar `this`, prefira **funções tradicionais**.
- **Arrow Functions** são úteis dentro de callbacks como `setTimeout`, pois evitam problemas com `this`.

====================================================================================
*/
