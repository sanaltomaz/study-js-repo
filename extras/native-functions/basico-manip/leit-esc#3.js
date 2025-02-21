/* ====================================================================================
# Leitura e Escrita de Arquivos JSON no Node.js

## Introdução
Além de ler e escrever arquivos separadamente, também podemos realizar essas operações 
juntas, modificando o conteúdo do arquivo JSON e salvando novamente.

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

// ========================== Modificação dos Dados ==========================
// Lemos o arquivo original, modificamos e salvamos de volta

const caminhoArquivo = 'dados.json';
const dados = lerArquivoJSON(caminhoArquivo);

if (dados) {
  dados.idade += 1; // Simulando uma atualização de idade
  dados.cidade = "Rio de Janeiro"; // Modificando outro valor
  escreverArquivoJSON(caminhoArquivo, dados);
}

/* ====================================================================================
## Considerações Finais
- **fs.readFileSync()** e **fs.writeFileSync()** são métodos síncronos, garantindo que 
  a leitura e escrita ocorram antes de prosseguir.
  
- Essa abordagem é útil para modificar configurações ou armazenar dados que precisam 
  ser persistidos.

==================================================================================== */
