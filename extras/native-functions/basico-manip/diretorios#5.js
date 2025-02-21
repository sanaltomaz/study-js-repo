/* ====================================================================================
# Leitura de Diretórios e Verificação de Existência de Arquivos no Node.js

## Introdução
No Node.js, podemos listar arquivos dentro de um diretório e verificar se um arquivo existe antes de manipulá-lo.
Isso é útil para trabalhar com múltiplos arquivos dinamicamente.

==================================================================================== */

const fs = require('fs');

// Importa o módulo 'path' do Node.js, que fornece utilitários para trabalhar com caminhos de arquivos e diretórios.
const path = require('path');

// ========================== Listar Arquivos em um Diretório ==========================
function listarArquivos(diretorio) {
  try {
    const arquivos = fs.readdirSync(diretorio); // Lendo o diretório
    console.log("Arquivos no diretório:", arquivos);
    return arquivos;
  } catch (erro) {
    console.error("Erro ao listar arquivos:", erro);
    return [];
  }
}

// ========================== Verificar Existência de um Arquivo ==========================
function verificarArquivoExiste(caminhoArquivo) {
  try {
    if (fs.existsSync(caminhoArquivo)) {
      console.log(`O arquivo "${path.basename(caminhoArquivo)}" existe.`);
      return true;
    } else {
      console.log(`O arquivo "${path.basename(caminhoArquivo)}" NÃO existe.`);
      return false;
    }
  } catch (erro) {
    console.error("Erro ao verificar arquivo:", erro);
    return false;
  }
}

// ========================== Exemplo de Uso ==========================
// Obtém o caminho absoluto do diretório atual onde o script está sendo executado.
const diretorioAtual = __dirname;
const caminhoArquivoTeste = path.join(diretorioAtual, 'dados.json');

// Listando arquivos no diretório atual
listarArquivos(diretorioAtual);

// Verificando se um arquivo específico existe
verificarArquivoExiste(caminhoArquivoTeste);

/* ====================================================================================
## Considerações Finais
- **fs.readdirSync()** permite obter uma lista de arquivos em um diretório.
- **fs.existsSync()** verifica se um arquivo ou diretório existe antes de acessá-lo.
- Isso evita erros ao tentar ler ou modificar arquivos inexistentes.

==================================================================================== */
