// Leitura de um aquivo simples usando `fs` e novos métodos do Node.js.

const fs = require('fs');

// Caminho do arquivo JSON
const caminhoArquivo = './dados.json';

// Leitura do arquivo de forma assíncrona
fs.readFile(caminhoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error("Erro ao ler o arquivo:", err);
    return;
  }

  // Exibir conteúdo do arquivo
  console.log("Conteúdo do arquivo JSON:");
  console.log(data);
});
