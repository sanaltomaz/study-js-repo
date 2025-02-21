/* ====================================================================================
# MANIPULAÇÃO AVANÇADA DE ARQUIVOS E DIRETÓRIOS NO NODE.JS  

## Criando, Renomeando e Excluindo Arquivos  

## Introdução  
Manipular arquivos e diretórios no Node.js é essencial para lidar com sistemas de arquivos.  
O módulo `fs` permite criar, renomear, excluir arquivos, enquanto o módulo `path` facilita  
a manipulação de caminhos. Também veremos como utilizar streams para lidar com arquivos grandes.  

Podemos utilizar os métodos do `fs` para essas operações.  
==================================================================================== */

// Importando o módulo fs  
const fs = require('fs');  
const path = require('path');  

// Criando um novo arquivo  
fs.writeFileSync('arquivo.txt', 'Este é um arquivo de teste');  
console.log('Arquivo criado com sucesso!');  

// Renomeando o arquivo  
fs.renameSync('arquivo.txt', 'novoArquivo.txt');  
console.log('Arquivo renomeado com sucesso!');  

// Removendo o arquivo  
fs.unlinkSync('novoArquivo.txt');  
console.log('Arquivo removido com sucesso!');  

// ========================== Criando um diretório ==========================
const dirPath = path.join(__dirname, 'novaPasta');  

if (!fs.existsSync(dirPath)) {  
    fs.mkdirSync(dirPath);  
    console.log('Diretório criado com sucesso!');  
}  

// ========================== Removendo um diretório ==========================
if (fs.existsSync(dirPath)) {  
    fs.rmdirSync(dirPath);  
    console.log('Diretório removido com sucesso!');  
}  

/*  
------------------------------------------------------------------------------------
## 4. Trabalhando com Streams para Manipular Arquivos Grandes  

Streams permitem processar grandes volumes de dados de forma eficiente sem carregar tudo na memória.  
*/

// Criando um arquivo grande  
const streamEscrita = fs.createWriteStream('grandeArquivo.txt');  

for (let i = 0; i < 1e6; i++) {  
    streamEscrita.write(`Linha ${i + 1}\n`);  
}  

streamEscrita.end();  
console.log('Arquivo grande criado!');  

// Lendo o arquivo usando stream  
const streamLeitura = fs.createReadStream('grandeArquivo.txt', { encoding: 'utf-8' });  

streamLeitura.on('data', (chunk) => {  
    console.log('Lendo chunk:', chunk.substring(0, 100)); // Exibe apenas os primeiros 100 caracteres  
});  

streamLeitura.on('end', () => {  
    console.log('Leitura completa!');  
});  

/* ====================================================================================
## Considerações Finais  

- O módulo `fs` permite manipular arquivos e diretórios de forma síncrona e assíncrona.  
- `fs.writeFileSync`, `fs.renameSync` e `fs.unlinkSync` são úteis para operações rápidas.  
- O uso de `fs.createReadStream` e `fs.createWriteStream` é ideal para lidar com arquivos grandes.  
- `fs.mkdirSync` e `fs.rmdirSync` permitem criar e remover diretórios dinamicamente.  
- Sempre verifique a existência de arquivos ou diretórios antes de manipulá-los para evitar erros.  

==================================================================================== */
