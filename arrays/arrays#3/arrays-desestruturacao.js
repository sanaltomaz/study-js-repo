/* 
DESESTRUTURAÇÃO EM JAVASCRIPT

------------------------------------------------------------------------------------
A desestruturação é uma forma concisa de extrair valores de arrays ou propriedades de objetos
em variáveis distintas. Essa funcionalidade foi introduzida no ES6 e torna o código
mais limpo e legível, especialmente ao lidar com dados complexos.
------------------------------------------------------------------------------------

1. **DESESTRUTURAÇÃO DE ARRAYS**:
Permite extrair elementos de um array e atribuí-los a variáveis distintas.
*/

const numeros = [10, 20, 30, 40];

const [primeiro, segundo] = numeros;
console.log(primeiro); // Resultado: 10
console.log(segundo); // Resultado: 20

// Ignorar elementos:
const [, , terceiro] = numeros;
console.log(terceiro); // Resultado: 30

// Utilizar valores padrão:
const [quinto = 50] = [];
console.log(quinto); // Resultado: 50

/* 
------------------------------------------------------------------------------------
2. **DESESTRUTURAÇÃO DE OBJETOS**:
Permite extrair propriedades de um objeto e atribuí-las a variáveis.
*/

const pessoa = {
  nome: 'Alice',
  idade: 25,
  profissao: 'Engenheira'
};

const { nome, idade } = pessoa;
console.log(nome); // Resultado: Alice
console.log(idade); // Resultado: 25

// Renomear variáveis:
const { profissao: ocupacao } = pessoa;
console.log(ocupacao); // Resultado: Engenheira

// Valores padrão:
const { sobrenome = 'Não informado' } = pessoa;
console.log(sobrenome); // Resultado: Não informado

/* 
------------------------------------------------------------------------------------
3. **DESESTRUTURAÇÃO EM FUNÇÕES**:
Podemos desestruturar diretamente nos parâmetros das funções.
*/

const exibirInfo = ({ nome, idade }) => {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
};

exibirInfo(pessoa);
// Resultado: Nome: Alice, Idade: 25

// Com arrays:
const somarNumeros = ([a, b]) => a + b;
console.log(somarNumeros([5, 10])); // Resultado: 15

/* 
------------------------------------------------------------------------------------
4. **DESESTRUTURAÇÃO ANINHADA**:
Para objetos ou arrays dentro de outros objetos/arrays.
*/

const empresa = {
  nome: 'TechCorp',
  endereco: {
    cidade: 'São Paulo',
    pais: 'Brasil'
  }
};

const {
  endereco: { cidade, pais }
} = empresa;
console.log(cidade); // Resultado: São Paulo
console.log(pais); // Resultado: Brasil

/* 
------------------------------------------------------------------------------------
5. **DESESTRUTURAÇÃO COM REST**:
Extrai parte dos dados enquanto o restante é armazenado em outra variável.
*/

const { nome: nomePessoa, ...resto } = pessoa;
console.log(nomePessoa); // Resultado: Alice
console.log(resto); // Resultado: { idade: 25, profissao: 'Engenheira' }

const [primeiroNum, ...outros] = numeros;
console.log(primeiroNum); // Resultado: 10
console.log(outros); // Resultado: [20, 30, 40]

/* 
------------------------------------------------------------------------------------
EXEMPLO MAIS TRABALHADO:
Vamos usar desestruturação em uma lógica mais prática.
*/

const produtos = [
  { nome: 'Notebook', preco: 3000, categoria: 'Eletrônicos' },
  { nome: 'Camiseta', preco: 50, categoria: 'Vestuário' },
  { nome: 'Smartphone', preco: 2000, categoria: 'Eletrônicos' }
];

// 1. Filtrar produtos por categoria:
const eletronicos = produtos.filter(({ categoria }) => categoria === 'Eletrônicos');
console.log(eletronicos);
// Resultado:
// [
//   { nome: 'Notebook', preco: 3000, categoria: 'Eletrônicos' },
//   { nome: 'Smartphone', preco: 2000, categoria: 'Eletrônicos' }
// ]

// 2. Calcular o preço total dos produtos:
const precoTotal = produtos.reduce((total, { preco }) => total + preco, 0);
console.log(precoTotal); // Resultado: 5050

/* 
------------------------------------------------------------------------------------
RESUMO:
1. A desestruturação simplifica o acesso a dados de arrays e objetos.
2. É amplamente utilizada em funções, especialmente com parâmetros e retornos complexos.
3. Use valores padrão, renomeie variáveis ou combine com o operador rest para maior flexibilidade.
4. Aprender a desestruturar corretamente melhora a legibilidade e eficiência do código.

------------------------------------------------------------------------------------
*/
