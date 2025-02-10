/* 
MÉTODO MAP

------------------------------------------------------------------------------------
O método **map** é utilizado para criar um novo array a partir de um array existente, 
chamando uma função de retorno (callback) para cada elemento do array original.
O resultado dessa função de retorno é adicionado ao novo array.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
let numeros = [1, 2, 3, 4, 5];
let numerosDobrados = numeros.map(function(num) {
    return num * 2;
});

console.log(numerosDobrados); 
// Resultado: [2, 4, 6, 8, 10]

/* 
EXPLICAÇÃO:
1. Criamos um array chamado **numeros** com cinco elementos: 1, 2, 3, 4 e 5.
2. O método **map** é chamado no array **numeros**, passando uma função de retorno (callback) como argumento.
3. Essa função de retorno recebe um elemento do array (**num**) e retorna esse elemento multiplicado por 2.
4. O método **map** cria um novo array (**numerosDobrados**) que contém os valores retornados pela função de retorno.

------------------------------------------------------------------------------------
EXEMPLO COM FUNÇÃO SETA (ARROW FUNCTION):
*/
let numerosTriplicados = numeros.map(num => num * 3);

console.log(numerosTriplicados); 
// Resultado: [3, 6, 9, 12, 15]

/* 
EXPLICAÇÃO:
1. O mesmo array **numeros** é usado.
2. O método **map** é chamado no array **numeros**, passando uma função seta (arrow function) como argumento.
3. A função seta recebe um elemento do array (**num**) e retorna esse elemento multiplicado por 3.
4. O método **map** cria um novo array (**numerosTriplicados**) que contém os valores retornados pela função seta.

------------------------------------------------------------------------------------
EXEMPLO COM OBJETOS:
*/
let pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 28 }
];

let nomes = pessoas.map(function(pessoa) {
    return pessoa.nome;
});

console.log(nomes); 
// Resultado: ["Ana", "João", "Maria"]

/* 
EXPLICAÇÃO:
1. Criamos um array de objetos chamado **pessoas**, onde cada objeto representa uma pessoa com propriedades **nome** e **idade**.
2. O método **map** é chamado no array **pessoas**, passando uma função de retorno (callback) como argumento.
3. Essa função de retorno recebe um objeto do array (**pessoa**) e retorna o valor da propriedade **nome** desse objeto.
4. O método **map** cria um novo array (**nomes**) que contém os valores dos nomes retornados pela função de retorno.

------------------------------------------------------------------------------------
DICAS IMPORTANTES:
1. O método **map** não altera o array original, ele sempre retorna um novo array.
2. A função de retorno (callback) passada ao **map** pode receber três argumentos: o elemento atual, o índice do elemento e o array original.
3. Use **map** quando quiser transformar cada elemento de um array em um novo valor.

------------------------------------------------------------------------------------
CONCLUSÃO:
O método **map** é uma ferramenta poderosa e flexível para transformar arrays em JavaScript, permitindo a criação de novos arrays a partir de uma função de retorno aplicada a cada elemento do array original.
*/
