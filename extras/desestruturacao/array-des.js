/* 
------------------------------------------------------------------------------------
# DESESTRUTURAÇÃO EM ARRAYS

------------------------------------------------------------------------------------
## 1. Introdução
A desestruturação em arrays permite extrair elementos de um array e atribuí-los diretamente a variáveis distintas. 
Essa funcionalidade torna o código mais limpo e facilita a manipulação de dados dentro de arrays.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição básica**: A desestruturação de arrays consiste em atribuir elementos de um array a variáveis, 
  usando a sintaxe de colchetes `[]`. Isso pode ser feito de forma simples, ou com mais controle, 
  como ignorar elementos ou atribuir valores padrão.
- **Quando usar**: É útil quando precisamos acessar dados específicos de arrays, 
  sem a necessidade de acessar índices manualmente.
- **Benefícios**: A desestruturação melhora a legibilidade do código, 
  facilita a extração de dados de arrays e torna o processo mais conciso.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Extração de Elementos de um Array
------------------------------------------------------------------------------------
*/
const numeros = [10, 20, 30, 40];

const [primeiro, segundo] = numeros;
console.log(primeiro); // Resultado: 10
console.log(segundo); // Resultado: 20

/* 
------------------------------------------------------------------------------------
### Exemplo 2: Ignorando Elementos
------------------------------------------------------------------------------------
*/
const [, , terceiro] = numeros;
console.log(terceiro); // Resultado: 30

/* 
------------------------------------------------------------------------------------
### Exemplo 3: Utilizando Valores Padrão
------------------------------------------------------------------------------------
*/
const [quinto = 50] = [];
console.log(quinto); // Resultado: 50

/* 
------------------------------------------------------------------------------------
## 4. Considerações Finais
- A desestruturação de arrays é uma forma eficiente e elegante de manipular dados dentro de arrays.
- Pode ser usada para extrair múltiplos elementos rapidamente, ou até ignorar elementos que não são necessários.
- Valores padrão são úteis quando não temos certeza se o array terá elementos suficientes.

------------------------------------------------------------------------------------
*/
