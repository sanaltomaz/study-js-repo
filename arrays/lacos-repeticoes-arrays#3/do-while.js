/* 
ESTRUTURA DE LOOP DO...WHILE EM JAVASCRIPT

------------------------------------------------------------------------------------
DEFINIÇÃO:
O loop **do...while** em JavaScript é uma estrutura de controle que permite a repetição de um bloco de código
enquanto uma condição especificada é verdadeira. A diferença fundamental entre o loop **do...while** e o loop **while**
é que o **do...while** sempre executa o bloco de código pelo menos uma vez antes de verificar a condição.

------------------------------------------------------------------------------------
SINTAXE:
A sintaxe básica de um loop **do...while** é:

do {
  // Bloco de código a ser executado
} while (condição);

1. **Bloco de código**: O código dentro do bloco `do` é executado uma vez antes de a condição ser avaliada.
2. **Condição**: Uma expressão que é avaliada após cada iteração do loop. Se for verdadeira, o loop continua; 
   se for falsa, o loop termina.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/

let contador = 0;

do {
  console.log(contador);
  contador++;
} while (contador < 5);
// Resultado: 0 1 2 3 4

/* 
EXPLICAÇÃO:
1. Declaramos uma variável `contador` e a inicializamos com 0.
2. O bloco de código dentro do `do` (`console.log(contador)` e `contador++`) é executado.
3. Após a execução do bloco de código, a condição `contador < 5` é avaliada.
4. Enquanto a condição for verdadeira, o loop continua e o bloco de código é executado novamente.
5. O loop termina quando `contador` atinge 5.
*/

/* 
------------------------------------------------------------------------------------
EXEMPLO COM ARRAYS:
O loop **do...while** pode ser utilizado para iterar sobre arrays, especialmente quando 
queremos garantir que o bloco de código seja executado pelo menos uma vez.
*/

const frutas = ["Maçã", "Banana", "Laranja"];
let indice = 0;

do {
  console.log(frutas[indice]);
  indice++;
} while (indice < frutas.length);
// Resultado: Maçã Banana Laranja

/* 
EXPLICAÇÃO:
1. Declaramos uma variável `indice` e a inicializamos com 0.
2. O bloco de código dentro do `do` (`console.log(frutas[indice])` e `indice++`) é executado.
3. Após a execução do bloco de código, a condição `indice < frutas.length` é avaliada.
4. Enquanto a condição for verdadeira, o loop continua e o bloco de código é executado novamente.
5. O loop termina quando `indice` atinge o comprimento do array `frutas`.
*/

/* 
------------------------------------------------------------------------------------
EXEMPLO COM CONDIÇÕES MAIS COMPLEXAS:
O loop **do...while** pode ser utilizado para esperar por condições complexas, 
garantindo pelo menos uma execução do bloco de código.
*/

let numero = 10;

do {
  if (numero % 2 === 0) {
    console.log(`${numero} é par`);
  } else {
    console.log(`${numero} é ímpar`);
  }
  numero--;
} while (numero > 0);
// Resultado: 
// 10 é par
// 9 é ímpar
// 8 é par
// ...

/* 
EXPLICAÇÃO:
1. Declaramos uma variável `numero` e a inicializamos com 10.
2. O bloco de código dentro do `do` é executado, verificando se o `numero` é par ou ímpar 
e imprimindo a mensagem correspondente.
3. Após a execução do bloco de código, a condição `numero > 0` é avaliada.
4. Enquanto a condição for verdadeira, o loop continua e o bloco de código é executado novamente.
5. O loop termina quando `numero` atinge 0.
*/

/* 
------------------------------------------------------------------------------------
DICAS IMPORTANTES:
1. O loop **do...while** garante que o bloco de código seja executado pelo menos uma vez, 
independentemente da condição.
2. Use o loop **do...while** quando você precisar executar o bloco de código pelo menos uma vez, 
antes de verificar a condição.
3. Certifique-se de que a condição do loop eventualmente se torne falsa, para evitar loops infinitos.

------------------------------------------------------------------------------------
CONCLUSÃO:
O loop **do...while** é uma ferramenta útil em JavaScript para situações onde é necessário 
garantir a execução inicial do bloco de código,
independentemente da condição. Ele oferece uma maneira flexível de repetir blocos de código 
com base em condições dinâmicas.
*/

