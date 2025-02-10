/* 
ESTRUTURA DE LOOP FOR...OF EM JAVASCRIPT

------------------------------------------------------------------------------------
DEFINIÇÃO:
O loop **for...of** em JavaScript é uma estrutura de controle que permite a iteração sobre 
elementos de objetos iteráveis, como arrays, strings, mapas, conjuntos (sets) e outros tipos de coleções.
Ele oferece uma sintaxe mais simples e direta para acessar cada elemento da coleção.

------------------------------------------------------------------------------------
SINTAXE:
A sintaxe básica de um loop **for...of** é:

for (variável of objetoIterável) {
  // Bloco de código a ser executado
}

1. **variável**: Uma variável que será atribuída a cada elemento do objeto iterável durante a iteração.
2. **objetoIterável**: Um objeto que implementa o protocolo iterável, como um array ou string.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO COM ARRAYS:
*/

const numeros = [1, 2, 3, 4, 5];

for (const num of numeros) {
  console.log(num);
}
// Resultado: 1 2 3 4 5

/* 
EXPLICAÇÃO:
1. Declaramos um array chamado **numeros** com cinco elementos.
2. O loop **for...of** itera sobre cada elemento do array **numeros**.
3. A cada iteração, o valor atual do elemento é atribuído à variável **num**.
4. O bloco de código dentro do loop (`console.log(num)`) é executado para cada elemento do array.
*/

/* 
------------------------------------------------------------------------------------
EXEMPLO COM STRINGS:
O loop **for...of** pode ser utilizado para iterar sobre caracteres de uma string.
*/

const texto = "Olá";

for (const char of texto) {
  console.log(char);
}
// Resultado: O l á

/* 
EXPLICAÇÃO:
1. Declaramos uma string chamada **texto**.
2. O loop **for...of** itera sobre cada caractere da string **texto**.
3. A cada iteração, o valor atual do caractere é atribuído à variável **char**.
4. O bloco de código dentro do loop (`console.log(char)`) é executado para cada caractere da string.
*/

/* 
------------------------------------------------------------------------------------
EXEMPLO COM MAPAS:
O loop **for...of** pode ser utilizado para iterar sobre entradas (chave/valor) de um mapa.
*/

const mapa = new Map();
mapa.set("a", 1);
mapa.set("b", 2);
mapa.set("c", 3);

for (const [chave, valor] of mapa) {
  console.log(chave, valor);
}
// Resultado: 
// a 1
// b 2
// c 3

/* 
EXPLICAÇÃO:
1. Criamos um objeto **mapa** usando a classe `Map`.
2. Adicionamos pares chave/valor ao mapa usando o método `set`.
3. O loop **for...of** itera sobre cada entrada (par chave/valor) do mapa.
4. A cada iteração, o par chave/valor é desestruturado e atribuído às variáveis **chave** e **valor**.
5. O bloco de código dentro do loop (`console.log(chave, valor)`) é executado para cada entrada do mapa.
*/

/* 
------------------------------------------------------------------------------------
EXEMPLO COM SETS:
O loop **for...of** pode ser utilizado para iterar sobre elementos de um conjunto (set).
*/

const conjunto = new Set([1, 2, 3, 4, 5]);

for (const valor of conjunto) {
  console.log(valor);
}
// Resultado: 1 2 3 4 5

/* 
EXPLICAÇÃO:
1. Criamos um objeto **conjunto** usando a classe `Set` e inicializamos com valores.
2. O loop **for...of** itera sobre cada elemento do conjunto **conjunto**.
3. A cada iteração, o valor atual do elemento é atribuído à variável **valor**.
4. O bloco de código dentro do loop (`console.log(valor)`) é executado para cada elemento do conjunto.
*/

/* 
------------------------------------------------------------------------------------
DICAS IMPORTANTES:
1. O loop **for...of** é ideal para iterar sobre elementos de coleções, como arrays, strings, mapas e conjuntos.
2. Ele oferece uma sintaxe mais simples e legível em comparação com outros loops, como **for** ou **while**.
3. O loop **for...of** não funciona diretamente em objetos que não são iteráveis, como objetos literais.

------------------------------------------------------------------------------------
CONCLUSÃO:
O loop **for...of** é uma ferramenta poderosa e conveniente em JavaScript para iterar sobre 
elementos de coleções iteráveis.
Ele oferece uma maneira clara e simples de acessar e manipular cada elemento de um objeto iterável, 
como arrays, strings, mapas e conjuntos.
*/

