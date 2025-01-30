/* 
FUNÇÕES CALLBACK EM JAVASCRIPT

------------------------------------------------------------------------------------
Uma função callback é uma função passada como argumento para outra função.
Essa abordagem permite que uma função principal chame outra função em um ponto
específico da sua execução, sendo amplamente utilizada para lidar com tarefas
assíncronas, manipulação de dados e eventos.

------------------------------------------------------------------------------------
1. **DEFINIÇÃO E USO BÁSICO**:
*/

// Exemplo de uma função callback simples:
function saudacao(nome, callback) {
    console.log(`Olá, ${nome}!`);
    callback();
  }
  
  function despedida() {
    console.log('Até logo!');
  }
  
  saudacao('Alice', despedida);
  // Resultado:
  // Olá, Alice!
  // Até logo!
  
  /* 
  EXPLICAÇÃO:
  1. A função `saudacao` recebe dois parâmetros: `nome` e `callback`.
  2. A função `despedida` é passada como argumento e é chamada dentro de `saudacao`.
  */
  
  /* 
  ------------------------------------------------------------------------------------
  2. **USO EM MÉTODOS COMO forEach, map, e filter**:
  Muitos métodos de array utilizam callbacks para manipular ou iterar sobre elementos.
  */
  
  const numeros = [1, 2, 3, 4];
  
  // Exemplo com forEach
  numeros.forEach((num) => {
    console.log(`Número: ${num}`);
  });
  // Resultado:
  // Número: 1
  // Número: 2
  // Número: 3
  // Número: 4
  
  // Exemplo com map
  const dobrados = numeros.map((num) => num * 2);
  console.log(dobrados);
  // Resultado: [2, 4, 6, 8]
  
  // Exemplo com filter
  const pares = numeros.filter((num) => num % 2 === 0);
  console.log(pares);
  // Resultado: [2, 4]
  
  /* 
  ------------------------------------------------------------------------------------
  3. **CALLBACKS EM FUNÇÕES ASSÍNCRONAS**:
  Funções callback são essenciais para operações assíncronas, como requisições a APIs
  e manipulação de temporizadores.
  */
  
  // Exemplo com setTimeout
  function processarDados(callback) {
    console.log('Processando dados...');
    setTimeout(() => {
      console.log('Dados processados!');
      callback();
    }, 2000);
  }
  
  function finalizar() {
    console.log('Operação finalizada.');
  }
  
  processarDados(finalizar);
  // Resultado:
  // Processando dados...
  // (Após 2 segundos)
  // Dados processados!
  // Operação finalizada.
  
  /* 
  ------------------------------------------------------------------------------------
  4. **MANEJO DE CALLBACKS ("CALLBACK HELL")**:
  Quando há muitos callbacks aninhados, o código pode se tornar difícil de ler e manter.
  Este problema é conhecido como "callback hell".
  */
  
  // Exemplo de callback hell:
  setTimeout(() => {
    console.log('Operação 1');
    setTimeout(() => {
      console.log('Operação 2');
      setTimeout(() => {
        console.log('Operação 3');
      }, 1000);
    }, 1000);
  }, 1000);
  
  /* 
  SOLUÇÃO:
  - Usar Promises ou async/await para evitar callbacks excessivos.
  */
  
  /* 
  ------------------------------------------------------------------------------------
  EXEMPLO MAIS TRABALHADO:
  Vamos implementar um exemplo prático de manipulação de dados com callbacks.
  */
  
  const usuarios = [
    { id: 1, nome: 'Alice' },
    { id: 2, nome: 'Bob' }
  ];
  
  function buscarUsuario(id, callback) {
    console.log('Buscando usuário...');
    setTimeout(() => {
      const usuario = usuarios.find((user) => user.id === id);
      if (usuario) {
        callback(null, usuario);
      } else {
        callback('Usuário não encontrado', null);
      }
    }, 1500);
  }
  
  buscarUsuario(1, (erro, usuario) => {
    if (erro) {
      console.error(erro);
    } else {
      console.log(`Usuário encontrado: ${usuario.nome}`);
    }
  });
  // Resultado:
  // Buscando usuário...
  // (Após 1,5 segundos)
  // Usuário encontrado: Alice
  
  /* 
  ------------------------------------------------------------------------------------
  RESUMO:
  1. Funções callback são funções passadas como argumentos e executadas em momentos específicos.
  2. São amplamente utilizadas em métodos de array e operações assíncronas.
  3. Callback hell pode ser evitado com o uso de Promises ou async/await.
  4. Entender o uso de callbacks é essencial para lidar com fluxos assíncronos e manipular dados de forma eficiente.
  
  ------------------------------------------------------------------------------------
  */
  