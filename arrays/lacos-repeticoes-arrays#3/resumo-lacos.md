# Laços de Repetição em JavaScript

## Loop For
- *Definição*: Utilizado para repetir um bloco de código um número específico de vezes.
- *Quando usar*: Quando você sabe com antecedência quantas vezes o loop deve ser executado.
- *Peculiaridades*: Oferece controle explícito sobre a inicialização, condição e incremento do loop. Ideal para iteração controlada de arrays.

## Loop While
- *Definição*: Executa um bloco de código enquanto uma condição especificada é verdadeira.
- *Quando usar*: Quando o número de iterações não é conhecido antecipadamente e depende de uma condição dinâmica.
- *Peculiaridades*: A condição é avaliada antes de cada iteração. Útil para loops que dependem de condições complexas ou eventos externos.

## Loop Do...While
- *Definição: Semelhante ao loop **while*, mas garante que o bloco de código seja executado pelo menos uma vez antes de verificar a condição.
- *Quando usar*: Quando é necessário garantir a execução inicial do bloco de código, independentemente da condição.
- *Peculiaridades*: A condição é avaliada após cada iteração. Útil quando a ação inicial deve ser executada pelo menos uma vez.

## Loop For...Of
- *Definição*: Utilizado para iterar sobre elementos de objetos iteráveis, como arrays, strings, mapas e conjuntos.
- *Quando usar*: Quando você deseja acessar diretamente os valores dos elementos de um objeto iterável.
- *Peculiaridades*: Oferece uma sintaxe mais simples e legível para iterar sobre elementos de coleções. Não funciona diretamente em objetos literais.

## Loop For...In
- *Definição*: Utilizado para iterar sobre as propriedades enumeráveis de um objeto.
- *Quando usar*: Quando você precisa acessar as chaves (propriedades) de um objeto literal.
- *Peculiaridades*: Itera sobre os nomes das propriedades de um objeto. Não é recomendado para iterar sobre arrays, pois itera sobre os índices, e não os valores.

## Links de Documentação:
- [Documentação do loop for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [Documentação do loop while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [Documentação do loop do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
- [Documentação do loop for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [Documentação do loop for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)