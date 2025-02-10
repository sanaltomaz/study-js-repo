/* 
ESTRUTURA DE LOOP FOR EM JAVASCRIPT

------------------------------------------------------------------------------------
DEFINIÇÃO:
O loop **for** em JavaScript é uma estrutura de controle que permite a repetição de um bloco de código
um número específico de vezes. Ele é particularmente útil quando se sabe com antecedência quantas vezes 
o loop deve ser executado.

------------------------------------------------------------------------------------
SINTAXE:
A sintaxe básica de um loop **for** é:

for (inicialização; condição; incremento) {
  // Bloco de código a ser executado
}

1. **inicialização**: Uma expressão ou declarações que inicializam o contador do loop.
2. **condição**: Uma expressão que é avaliada antes de cada iteração do loop. 
   Se for verdadeira, o loop continua; se for falsa, o loop termina.
3. **incremento**: Uma expressão que é executada ao final de cada iteração do loop. 
   Normalmente usada para atualizar o contador do loop.

------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/

// Loop que imprime os números de 0 a 4
for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // Resultado: 0 1 2 3 4
  
  /* 
  EXPLICAÇÃO:
  1. **inicialização**: `let i = 0` inicializa o contador `i` com 0.
  2. **condição**: `i < 5` verifica se `i` é menor que 5.
  3. **incremento**: `i++` incrementa o valor de `i` em 1 ao final de cada iteração.
  4. O bloco de código dentro do loop (`console.log(i)`) é executado para cada valor de `i` de 0 a 4.
  */
  
  /* 
  ------------------------------------------------------------------------------------
  EXEMPLO COM ARRAYS:
  O loop **for** é frequentemente utilizado para iterar sobre arrays.
  */
  
  const frutas = ["Maçã", "Banana", "Laranja"];
  
  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
  // Resultado: Maçã Banana Laranja
  
  /* 
  EXPLICAÇÃO:
  1. **inicialização**: `let i = 0` inicializa o contador `i` com 0.
  2. **condição**: `i < frutas.length` verifica se `i` é menor que o comprimento do array `frutas`.
  3. **incremento**: `i++` incrementa o valor de `i` em 1 ao final de cada iteração.
  4. O bloco de código dentro do loop (`console.log(frutas[i])`) é executado para cada elemento do array `frutas`.
  */
  
  /* 
  ------------------------------------------------------------------------------------
  EXEMPLO COM NÚMEROS:
  */
  
  for (let i = 10; i >= 0; i--) {
    console.log(i);
  }
  // Resultado: 10 9 8 7 6 5 4 3 2 1 0
  
  /* 
  EXPLICAÇÃO:
  1. **inicialização**: `let i = 10` inicializa o contador `i` com 10.
  2. **condição**: `i >= 0` verifica se `i` é maior ou igual a 0.
  3. **incremento**: `i--` decrementa o valor de `i` em 1 ao final de cada iteração.
  4. O bloco de código dentro do loop (`console.log(i)`) é executado para cada valor de `i` de 10 a 0.
  */
  
  /* 
  ------------------------------------------------------------------------------------
  DICAS IMPORTANTES:
  1. Certifique-se de que a condição do loop eventualmente se torne falsa, para evitar loops infinitos.
  2. A variável de controle do loop (como `i` nos exemplos acima) pode ser declarada fora do loop, se necessário.
  3. O loop **for** pode ser usado em combinação com outras estruturas de controle, como `if`, 
     para criar comportamentos mais complexos.
  
  ------------------------------------------------------------------------------------
  CONCLUSÃO:
  O loop **for** é uma ferramenta fundamental em JavaScript para a repetição de blocos de código. 
  Ele oferece uma maneira eficiente de iterar sobre arrays e realizar operações repetitivas 
  com controle explícito sobre o número de iterações.
  */
  
  