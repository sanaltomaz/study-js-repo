/* 
------------------------------------------------------------------------------------
# CALLBACKS EM FUNÇÕES ASSÍNCRONAS E MANEJO DE CALLBACKS (CALLBACK HELL)

------------------------------------------------------------------------------------
## 1. Introdução
As funções callback são essenciais para operações assíncronas em JavaScript. 
Elas permitem que funções aguardem a conclusão de uma operação antes de executar outra. 
No entanto, o uso excessivo de callbacks aninhados pode levar ao problema conhecido como "callback hell", 
que torna o código difícil de ler e manter.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento

- **Definição básica**: Em funções assíncronas, callbacks são passadas como argumentos para 
  indicar a conclusão de uma operação. Após a operação ser concluída, a função callback é chamada.
- **Quando usar**: Quando precisamos de uma operação assíncrona, como requisições a APIs, 
  temporizadores (`setTimeout`) ou outras tarefas que não bloqueiam o fluxo do programa.
- **Benefícios**: Permite que o código continue executando enquanto aguarda uma operação assíncrona, 
  evitando o bloqueio da execução.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Callbacks em Funções Assíncronas com `setTimeout`
------------------------------------------------------------------------------------
*/
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
### Exemplo 2: Problema de Callback Hell
------------------------------------------------------------------------------------
*/
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
------------------------------------------------------------------------------------
## 4. Considerações Finais
- **Callbacks em funções assíncronas** são úteis para lidar com tarefas que podem ser 
  processadas de maneira independente, como temporizadores e chamadas de APIs.
- **Callback hell** pode ser evitado ao organizar o código de maneira mais clara, 
  utilizando Promises ou a abordagem `async/await`.

------------------------------------------------------------------------------------
*/
  