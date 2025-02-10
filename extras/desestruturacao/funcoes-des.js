/* 
------------------------------------------------------------------------------------
# DESESTRUTURAÇÃO EM FUNÇÕES

------------------------------------------------------------------------------------
## 1. Introdução
A desestruturação em funções permite extrair diretamente os dados de objetos ou arrays nos parâmetros das funções, 
tornando o código mais limpo e direto.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição básica**: Podemos desestruturar objetos ou arrays diretamente nos parâmetros de uma função. 
  Isso permite acessar os dados de forma mais intuitiva sem precisar acessar manualmente os índices ou as propriedades.
- **Quando usar**: Ideal quando a função recebe um objeto ou um array como argumento e queremos 
  acessar ou manipular seus valores diretamente.
- **Benefícios**: Melhora a legibilidade e torna as funções mais concisas, 
  especialmente quando lidamos com objetos complexos.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Desestruturação de Objetos em Parâmetros
------------------------------------------------------------------------------------
*/
const exibirInfo = ({ nome, idade }) => {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
};

const pessoa = {
  nome: 'Alice',
  idade: 25,
  profissao: 'Engenheira'
};

exibirInfo(pessoa);
// Resultado: Nome: Alice, Idade: 25

/* 
------------------------------------------------------------------------------------
### Exemplo 2: Desestruturação de Arrays em Parâmetros
------------------------------------------------------------------------------------
*/
const somarNumeros = ([a, b]) => a + b;
console.log(somarNumeros([5, 10])); // Resultado: 15

/* 
------------------------------------------------------------------------------------
## 4. Considerações Finais
- A desestruturação em funções torna o código mais limpo e elimina a necessidade de acessar propriedades manualmente.
- Pode ser usada tanto com objetos quanto com arrays, facilitando a manipulação de dados complexos.
- Ideal para funções que recebem dados em formatos estruturados, como objetos ou arrays.

------------------------------------------------------------------------------------
*/
