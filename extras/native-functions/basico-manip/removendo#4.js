/* ====================================================================================
# Leitura, Escrita e Remoção de Arquivos JSON no Node.js

## Introdução
Além de ler e escrever arquivos JSON, o Node.js também permite remover arquivos do sistema.
Isso é útil para manipulação dinâmica de arquivos de dados.

==================================================================================== */

const fs = require('fs');

// ========================== Leitura do Arquivo JSON ==========================
function lerArquivoJSON(caminho) {
  try {
    const dadosBrutos = fs.readFileSync(caminho, 'utf-8'); // Lendo o arquivo como texto
    const dadosJSON = JSON.parse(dadosBrutos); // Convertendo para objeto JavaScript
    console.log("Arquivo JSON lido com sucesso:", dadosJSON);
    return dadosJSON;
  } catch (erro) {
    console.error("Erro ao ler o arquivo JSON:", erro);
    return null;
  }
}

// ========================== Escrita no Arquivo JSON ==========================
function escreverArquivoJSON(caminho, dados) {
  try {
    const jsonString = JSON.stringify(dados, null, 2); // Convertendo para JSON formatado
    fs.writeFileSync(caminho, jsonString);
    console.log("Arquivo JSON atualizado com sucesso!");
  } catch (erro) {
    console.error("Erro ao escrever no arquivo JSON:", erro);
  }
}

// ========================== Remoção do Arquivo JSON ==========================
function removerArquivoJSON(caminho) {
  try {
    if (fs.existsSync(caminho)) {
      fs.unlinkSync(caminho); // Removendo o arquivo
      console.log("Arquivo JSON removido com sucesso!");
    } else {
      console.log("Arquivo não encontrado.");
    }
  } catch (erro) {
    console.error("Erro ao remover o arquivo JSON:", erro);
  }
}

// ========================== Exemplo de Uso ==========================

const caminhoArquivo = 'dados.json';

// Criando ou modificando um arquivo JSON
const dadosExemplo = { nome: "Carlos", idade: 30, cidade: "São Paulo" };
escreverArquivoJSON(caminhoArquivo, dadosExemplo);

// Lendo o arquivo
lerArquivoJSON(caminhoArquivo);

// Removendo o arquivo após a leitura
removerArquivoJSON(caminhoArquivo);

/* ====================================================================================
## Considerações Finais
- **fs.unlinkSync()** é utilizado para remover arquivos de forma síncrona.
- Antes de remover um arquivo, é recomendado verificar se ele existe com **fs.existsSync()**.
- Essa funcionalidade pode ser útil para arquivos temporários e limpeza de dados antigos.

==================================================================================== */
