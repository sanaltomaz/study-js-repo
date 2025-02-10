/* 
ESTRUTURA DE LOOP WHILE EM JAVASCRIPT

------------------------------------------------------------------------------------
DEFINIÇÃO:
O loop **while** em JavaScript é uma estrutura de controle que permite a repetição de um bloco de código 
enquanto uma condição especificada é verdadeira. Ele é particularmente útil quando o número de iterações 
não é conhecido antecipadamente e depende de uma condição dinâmica.

------------------------------------------------------------------------------------
SINTAXE:
A sintaxe básica de um loop **while** é:

while (condição) {
  // Bloco de código a ser executado
}

1. **condição**: Uma expressão que é avaliada antes de cada iteração do loop. Se for verdadeira, 
   o loop continua; se for falsa, o loop termina.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/

let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}
// Resultado: 0 1 2 3 4

/* 
EXPLICAÇÃO:
1. Declaramos uma variável `contador` e a inicializamos com 0.
2. A condição `contador < 5` é avaliada antes de cada iteração.
3. Enquanto a condição for verdadeira, o bloco de código dentro do loop 
   (`console.log(contador)` e `contador++`) é executado.
4. O valor de `contador` é incrementado em 1 ao final de cada iteração.
5. O loop termina quando `contador` atinge 5.
*/

/* 
------------------------------------------------------------------------------------
EXEMPLO COM ARRAYS:
O loop **while** pode ser utilizado para iterar sobre arrays, especialmente quando o número de iterações é dinâmico.
*/

const frutas = ["Maçã", "Banana", "Laranja"];
let indice = 0;

while (indice < frutas.length) {
  console.log(frutas[indice]);
  indice++;
}
// Resultado: Maçã Banana Laranja

/* 
EXPLICAÇÃO:
1. Declaramos uma variável `indice` e a inicializamos com 0.
2. A condição `indice < frutas.length` é avaliada antes de cada iteração.
3. Enquanto a condição for verdadeira, o bloco de código dentro do loop 
   (`console.log(frutas[indice])` e `indice++`) é executado.
4. O valor de `indice` é incrementado em 1 ao final de cada iteração.
5. O loop termina quando `indice` atinge o comprimento do array `frutas`.
*/

/* 
------------------------------------------------------------------------------------
EXEMPLO COM CONDIÇÕES MAIS COMPLEXAS:
O loop **while** pode ser utilizado para esperar por condições complexas.
*/

let numero = 10;

while (numero > 0) {
  if (numero % 2 === 0) {
    console.log(`${numero} é par`);
  } else {
    console.log(`${numero} é ímpar`);
  }
  numero--;
}
// Resultado: 
// 10 é par
// 9 é ímpar
// 8 é par
// ...

/* 
EXPLICAÇÃO:
1. Declaramos uma variável `numero` e a inicializamos com 10.
2. A condição `numero > 0` é avaliada antes de cada iteração.
3. Enquanto a condição for verdadeira, o bloco de código dentro do loop é executado.
4. Verificamos se o `numero` é par ou ímpar e imprimimos a mensagem correspondente.
5. O valor de `numero` é decrementado em 1 ao final de cada iteração.
6. O loop termina quando `numero` atinge 0.
*/

/* 
------------------------------------------------------------------------------------
DICAS IMPORTANTES:
1. Certifique-se de que a condição do loop eventualmente se torne falsa, para evitar loops infinitos.
2. Use o loop **while** quando o número de iterações não é conhecido antecipadamente.
3. O loop **while** pode ser combinado com outras estruturas de controle, como `if`, 
   para criar comportamentos mais complexos.

------------------------------------------------------------------------------------
CONCLUSÃO:
O loop **while** é uma ferramenta fundamental em JavaScript para a repetição de blocos de 
código com base em uma condição dinâmica.
Ele oferece flexibilidade para situações em que o número de iterações não é conhecido 
antecipadamente e depende de condições variáveis.
*/

