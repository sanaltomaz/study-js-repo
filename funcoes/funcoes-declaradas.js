/* 
FUNÇÕES DECLARADAS

------------------------------------------------------------------------------------
Funções declaradas são definidas utilizando a palavra-chave **function**, seguida
do nome da função e dos parênteses **()** que podem conter parâmetros.

Essas funções são "carregadas" no início do script graças ao processo chamado **hoisting**. 
Isso significa que você pode chamá-las antes mesmo de serem declaradas no código.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
console.log(saudacao()); // Resultado: "Olá, mundo!"

function saudacao() {
    return "Olá, mundo!";
}

/* 
EXPLICAÇÃO:
1. O nome da função é **saudacao**.
2. Não há parâmetros, pois os parênteses estão vazios.
3. A função retorna a string "Olá, mundo!".
4. Por causa do **hoisting**, podemos chamar a função antes de sua declaração.
------------------------------------------------------------------------------------
EXEMPLO COM PARÂMETROS:
*/
function soma(a, b) {
    return a + b;
}

console.log(soma(5, 3));  // Resultado: 8
console.log(soma(10, 20)); // Resultado: 30
console.log(soma(100, 200)); // Resultado: 300

/* 
EXPLICAÇÃO:
1. A função **soma** recebe dois parâmetros (**a** e **b**).
2. Ela retorna a soma dos parâmetros.
3. Podemos reutilizar essa função para somar quaisquer números.
------------------------------------------------------------------------------------
EXEMPLO COM VALOR PADRÃO DE PARÂMETRO:
*/
function saudacaoPersonalizada(nome = "Visitante") {
    return `Olá, ${nome}! Bem-vindo(a)!`;
}

console.log(saudacaoPersonalizada("Lucas")); // Resultado: "Olá, Lucas! Bem-vindo(a)!"
console.log(saudacaoPersonalizada()); // Resultado: "Olá, Visitante! Bem-vindo(a)!"

/* 
EXPLICAÇÃO:
1. O parâmetro **nome** tem um valor padrão definido como "Visitante".
2. Se nenhum valor for fornecido ao chamar a função, o valor padrão será usado.
3. Podemos personalizar a saudação fornecendo um nome.
------------------------------------------------------------------------------------
CARACTERÍSTICAS IMPORTANTES DAS FUNÇÕES DECLARADAS:

1. **Hoisting**: As funções declaradas são movidas para o topo do escopo, 
   permitindo que sejam chamadas antes de serem definidas.

2. **Nome da Função**: Sempre possuem um nome explícito, facilitando a reutilização.

3. **Bloco de Código**: Todo o código executado pela função está dentro das chaves **{}**.

4. **Reutilização**: Ideais para funções que serão usadas em várias partes do programa.
------------------------------------------------------------------------------------
EXEMPLO DE REUTILIZAÇÃO EM DIFERENTES CONTEXTOS:
*/

function calcularArea(largura, altura) {
    return largura * altura;
}

// Usando para calcular área de um retângulo
console.log(calcularArea(5, 10)); // Resultado: 50

// Usando para calcular área de um quadrado (largura e altura iguais)
console.log(calcularArea(4, 4)); // Resultado: 16

// Usando para calcular área de um triângulo (base e altura diferentes)
console.log(calcularArea(6, 8)); // Resultado: 48

/* 
DICAS IMPORTANTES:

1. **Prefira funções declaradas para códigos reutilizáveis e claros**, pois o nome
   da função facilita a leitura e depuração.

2. Evite lógicas muito complexas dentro de uma única função. Caso necessário,
   divida o código em várias funções menores para manter a legibilidade.

3. Funções declaradas são adequadas para estruturas de programação modular, 
   onde você pode exportar e importar funções entre arquivos.

------------------------------------------------------------------------------------
CURIOSIDADE EXTRA:

- As funções declaradas podem ser usadas como "construtores" em JavaScript 
  (antes da introdução das classes). Exemplo:
*/

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new Pessoa("Ana", 25);
console.log(pessoa1.nome); // Resultado: "Ana"

const pessoa2 = new Pessoa("João", 30);
console.log(pessoa2.nome); // Resultado: "João"

/* 
Essa prática é menos comum hoje, pois as **classes** oferecem uma alternativa mais moderna e legível.
*/

// Definição da classe Pessoa
class PessoaModerna {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoaModerna1 = new PessoaModerna("Ana", 25);
console.log(pessoaModerna1.nome); // Resultado: "Ana"

const pessoaModerna2 = new PessoaModerna("João", 30);
console.log(pessoaModerna2.nome); // Resultado: "João"
