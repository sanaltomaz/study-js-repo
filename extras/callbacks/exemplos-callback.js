/* 
------------------------------------------------------------------------------------
# EXEMPLOS MAIS TRABALHADOS (MANIPULAÇÃO DE DADOS COM CALLBACKS)

------------------------------------------------------------------------------------
## 1. Introdução
Neste exemplo mais complexo, vamos explorar como funções callback podem ser utilizadas em cenários práticos para manipulação de dados. A desestruturação dos dados e a combinação com operações assíncronas exemplificam o poder dessa técnica em fluxos de trabalho do mundo real.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição básica**: Vamos usar callbacks para buscar um usuário e manipular dados de maneira assíncrona. Esse tipo de operação é comum em sistemas de busca, API calls ou outras interações que dependem de tempo para concluir.
- **Quando usar**: Quando é necessário realizar operações assíncronas que envolvem dados externos, como consultar uma base de dados ou fazer uma requisição de rede.
- **Benefícios**: Callback permite a execução de ações assim que uma operação assíncrona é completada, sem bloquear a execução de outras partes do programa.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo: Manipulação de Dados com Callbacks
------------------------------------------------------------------------------------
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
## 4. Considerações Finais
- O uso de **callbacks para manipulação de dados** é comum em ambientes assíncronos onde operações, como requisições HTTP, dependem do tempo para concluir.
- Callback permite que o código seja executado de maneira eficiente sem bloquear a execução de outras operações.
- A técnica é poderosa, mas deve ser usada com cuidado para evitar problemas como **callback hell**, que pode ser evitado com o uso de Promises ou `async/await`.

------------------------------------------------------------------------------------
*/
