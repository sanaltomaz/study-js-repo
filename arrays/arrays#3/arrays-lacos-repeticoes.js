/* 
LAÇOS DE REPETIÇÃO EM JAVASCRIPT

------------------------------------------------------------------------------------
Laços de repetição são estruturas usadas para executar um bloco de código várias vezes, 
gerando eficiência ao lidar com grandes volumes de dados ou tarefas repetitivas. 
O JavaScript oferece várias opções de laços, cada uma com casos específicos de uso.
------------------------------------------------------------------------------------

TIPOS DE LAÇOS:
1. **for**: Utilizado quando sabemos o número exato de iterações.
2. **while**: Ideal para quando não sabemos o número de iterações previamente, mas temos uma condição.
3. **do...while**: Semelhante ao `while`, mas garante a execução do bloco pelo menos uma vez.
4. **for...of**: Para percorrer elementos iteráveis (arrays, strings, etc.).
5. **for...in**: Para iterar sobre as propriedades de um objeto.
------------------------------------------------------------------------------------

1. **FOR**:
Um laço controlado por uma variável de inicialização, condição e incremento.
*/

for (let i = 0; i < 5; i++) {
    console.log(`Iteração ${i}`);
  }
  // Resultado:
  // Iteração 0
  // Iteração 1
  // Iteração 2
  // Iteração 3
  // Iteração 4
  
  /* 
  EXPLICAÇÃO:
  1. Inicializamos `i` com 0.
  2. O laço executa enquanto `i < 5`.
  3. O valor de `i` é incrementado a cada iteração.
  */
  
  /* 
  ------------------------------------------------------------------------------------
  2. **WHILE**:
  Executa enquanto a condição é verdadeira.
  */
  
  let contador = 0;
  while (contador < 3) {
    console.log(`Contador: ${contador}`);
    contador++;
  }
  // Resultado:
  // Contador: 0
  // Contador: 1
  // Contador: 2
  
  /* 
  EXPLICAÇÃO:
  1. Inicializamos `contador` com 0.
  2. Enquanto `contador < 3`, o laço é executado.
  3. Incrementamos `contador` a cada iteração.
  */
  
  /* 
  ------------------------------------------------------------------------------------
  3. **DO...WHILE**:
  Similar ao `while`, mas o bloco é executado pelo menos uma vez, 
  independentemente da condição.
  */
  
  do {
    console.log(`Contador: ${contador}`);
    contador++;
  } while (contador < 5);
  // Resultado:
  // Contador: 3
  // Contador: 4
  
  /* 
  ------------------------------------------------------------------------------------
  4. **FOR...OF**:
  Usado para iterar sobre elementos de objetos iteráveis como arrays ou strings.
  */
  
  const frutas = ['maçã', 'banana', 'laranja'];
  for (const fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
  }
  // Resultado:
  // Fruta: maçã
  // Fruta: banana
  // Fruta: laranja
  
  /* 
  ------------------------------------------------------------------------------------
  5. **FOR...IN**:
  Itera sobre as propriedades de um objeto.
  */
  
  const carro = { marca: 'Toyota', modelo: 'Corolla', ano: 2020 };
  for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
  }
  // Resultado:
  // marca: Toyota
  // modelo: Corolla
  // ano: 2020
  
  /* 
  ------------------------------------------------------------------------------------
  EXEMPLO MAIS TRABALHADO:
  Vamos combinar diferentes tipos de laços para manipular dados.
  */
  
  const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 9 },
    { nome: 'Pedro', nota: 5 },
    { nome: 'Ana', nota: 6 }
  ];
  
  // 1. Filtrar alunos aprovados (nota >= 7)
  const aprovados = [];
  for (const aluno of alunos) {
    if (aluno.nota >= 7) {
      aprovados.push(aluno.nome);
    }
  }
  console.log('Aprovados:', aprovados);
  // Resultado: Aprovados: [ 'João', 'Maria' ]
  
  // 2. Calcular a média da turma
  let somaNotas = 0;
  for (let i = 0; i < alunos.length; i++) {
    somaNotas += alunos[i].nota;
  }
  const media = somaNotas / alunos.length;
  console.log('Média da turma:', media);
  // Resultado: Média da turma: 7
  
  /* 
  ------------------------------------------------------------------------------------
  RESUMO:
  1. Laços de repetição são essenciais para processar dados de forma eficiente.
  2. Escolha o laço com base no tipo de iteração necessário:
     - `for`: Número fixo de iterações.
     - `while`/`do...while`: Condições dinâmicas.
     - `for...of`/`for...in`: Iteração sobre coleções ou objetos.
  3. Combine diferentes laços para resolver problemas complexos e manipular estruturas de dados.
  
  ------------------------------------------------------------------------------------
  */
  