/* 
------------------------------------------------------------------------------------
# EXEMPLOS MAIS TRABALHADOS

------------------------------------------------------------------------------------
## 1. Introdução
Neste tópico, vamos explorar um exemplo mais complexo de desestruturação, 
utilizando-a em um cenário prático com arrays de objetos. 
O objetivo é demonstrar como a desestruturação pode ser aplicada em situações do mundo real para manipulação de dados.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição básica**: Vamos usar desestruturação para extrair informações de um array de objetos, 
  realizar filtros e cálculos, demonstrando a versatilidade da técnica.
- **Quando usar**: Ideal para trabalhar com dados mais complexos, 
  como listas de objetos, onde é necessário filtrar ou manipular dados específicos.
- **Benefícios**: A desestruturação ajuda a extrair dados de forma clara e facilita operações como filtragem, 
  mapeamento e redução.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Filtrando Produtos por Categoria
------------------------------------------------------------------------------------
*/
const produtos = [
    { nome: 'Notebook', preco: 3000, categoria: 'Eletrônicos' },
    { nome: 'Camiseta', preco: 50, categoria: 'Vestuário' },
    { nome: 'Smartphone', preco: 2000, categoria: 'Eletrônicos' }
];

// Filtrar produtos da categoria 'Eletrônicos'
const eletronicos = produtos.filter(({ categoria }) => categoria === 'Eletrônicos');
console.log(eletronicos);
// Resultado:
// [
//   { nome: 'Notebook', preco: 3000, categoria: 'Eletrônicos' },
//   { nome: 'Smartphone', preco: 2000, categoria: 'Eletrônicos' }
// ]

/* 
------------------------------------------------------------------------------------
### Exemplo 2: Calculando o Preço Total dos Produtos
------------------------------------------------------------------------------------
*/
const precoTotal = produtos.reduce((total, { preco }) => total + preco, 0);
console.log(precoTotal); // Resultado: 5050

/* 
------------------------------------------------------------------------------------
## 4. Considerações Finais
- A desestruturação é uma ferramenta poderosa para trabalhar com dados estruturados, como arrays de objetos.
- Em exemplos mais complexos, ela permite filtrar, manipular e calcular informações de maneira eficiente e legível.
- Combine a desestruturação com métodos de array como `filter` e `reduce` 
  para obter ainda mais flexibilidade no seu código.

------------------------------------------------------------------------------------
*/
  