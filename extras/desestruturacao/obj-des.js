/* 
------------------------------------------------------------------------------------
# DESESTRUTURAÇÃO EM OBJETOS

------------------------------------------------------------------------------------
## 1. Introdução
A desestruturação em objetos permite extrair propriedades de um objeto e atribuí-las a variáveis com nomes específicos. Essa técnica simplifica o código e facilita o acesso a valores dentro de objetos complexos.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição básica**: A desestruturação de objetos envolve usar a sintaxe de chaves `{}` 
  para extrair as propriedades e atribuí-las a variáveis. 
  Podemos até renomear as variáveis ou fornecer valores padrão.
- **Quando usar**: É útil quando trabalhamos com objetos com várias propriedades, 
  especialmente quando precisamos acessar apenas algumas delas.
- **Benefícios**: Reduz o código repetitivo e torna a extração de dados mais clara e eficiente.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Extração Simples de Propriedades
------------------------------------------------------------------------------------
*/
const pessoa = {
    nome: 'Alice',
    idade: 25,
    profissao: 'Engenheira'
};

const { nome, idade } = pessoa;
console.log(nome); // Resultado: Alice
console.log(idade); // Resultado: 25

/* 
------------------------------------------------------------------------------------
### Exemplo 2: Renomeando Propriedades
------------------------------------------------------------------------------------
*/
const { profissao: ocupacao } = pessoa;
console.log(ocupacao); // Resultado: Engenheira

/* 
------------------------------------------------------------------------------------
### Exemplo 3: Utilizando Valores Padrão
------------------------------------------------------------------------------------
*/
const { sobrenome = 'Não informado' } = pessoa;
console.log(sobrenome); // Resultado: Não informado

/* 
------------------------------------------------------------------------------------
## 4. Considerações Finais
- A desestruturação de objetos é uma técnica poderosa para extrair propriedades de forma mais concisa e legível.
- Renomear variáveis e usar valores padrão torna o código ainda mais flexível.
- Essa abordagem é especialmente útil quando lidamos com objetos grandes e precisamos 
  acessar propriedades específicas.

------------------------------------------------------------------------------------
*/
