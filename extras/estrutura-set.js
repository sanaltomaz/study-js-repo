/*
------------------------------------------------------------------------------------
# ESTRUTURA SET

------------------------------------------------------------------------------------
## 1. Introdução
A estrutura **Set** em JavaScript é uma coleção de elementos que são **únicos** e **não ordenados**. 
Isso significa que, ao contrário de arrays, um Set não permite duplicação de elementos. 
A principal vantagem do Set é garantir que todos os itens armazenados sejam distintos, 
sem necessidade de verificações manuais de duplicidade.

O Set é especialmente útil quando se quer garantir que um conjunto de elementos seja único, como, 
por exemplo, ao verificar a presença de itens em uma lista ou realizar operações matemáticas entre conjuntos.

------------------------------------------------------------------------------------
2. Descrição do Funcionamento

O que é um Set?
Um **Set** é uma coleção de elementos, mas ao contrário de um array, ele não permite duplicatas. 
Ou seja, se você tentar adicionar um valor que já existe no Set, ele não será inserido novamente.

- **Elementos únicos**: Cada item em um Set é único, portanto, duplicatas não são permitidas.
- **Não ordenado**: O Set não garante a ordem dos elementos inseridos. 
    Isso significa que os elementos podem não ser percorridos na ordem em que foram adicionados.
- **Iterável**: O Set pode ser percorrido utilizando métodos de iteração, 
    como `forEach()` ou `for...of`, tornando fácil iterar sobre os elementos.
- **Desempenho**: Operações como `add()`, `has()` e `delete()` são rápidas, 
    o que torna o Set uma estrutura eficiente para manipulação de dados.

Quando utilizar um Set?
- Quando você precisa de uma coleção de elementos sem duplicatas.
- Quando você precisa de operações eficientes de busca e remoção de elementos.
- Quando a ordem dos elementos não é importante, mas a unicidade é.

------------------------------------------------------------------------------------
*/
// 3. Exemplos Práticos

// Exemplo 1: Criando um Set e adicionando elementos
const meuSet = new Set();
meuSet.add(10);
meuSet.add(20);
meuSet.add(30);
meuSet.add(10);  // Duplicata ignorada

console.log(meuSet);  
// Resultado: Set { 10, 20, 30 } (10 não foi adicionado novamente)


// Exemplo 2: Verificando se um elemento existe
console.log(meuSet.has(20));  // true
console.log(meuSet.has(40));  // false


// Exemplo 3: Removendo elementos
meuSet.delete(20);  // Remove o elemento 20
console.log(meuSet);  
// Resultado: Set { 10, 30 }


// Exemplo 4: Iterando sobre um Set
// Usando forEach
meuSet.forEach(val => {
  console.log(val);  // 10, 30
});

// Usando for...of
for (let valor of meuSet) {
  console.log(valor);  // 10, 30
}


// Exemplo 5: Tamanho de um Set
console.log(meuSet.size);  // 2
