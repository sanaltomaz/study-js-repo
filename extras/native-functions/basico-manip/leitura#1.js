/* ------------------------------------------------------------------------------------
# Leitura de Arquivos JSON no Node.js

## Introdução
No Node.js, podemos ler arquivos JSON de forma **síncrona** ou **assíncrona** utilizando o módulo `fs` (File System).  
Cada abordagem tem suas vantagens:
- **Leitura síncrona (`fs.readFileSync`)**: Bloqueia a execução até que a leitura seja concluída.
- **Leitura assíncrona (`fs.readFile`)**: Permite que outras operações continuem enquanto o arquivo é lido.

------------------------------------------------------------------------------------ */

// Importando o módulo 'fs' para manipulação de arquivos
const fs = require('fs');

// Caminho do arquivo JSON que será lido
const caminhoArquivo = './dados.json'; //arquivo não existe, vai dar erro

/* ------------------------------------------------------------------------------------
# Leitura Síncrona - fs.readFileSync()
Essa abordagem lê o arquivo e retorna seu conteúdo imediatamente.
Ela pode ser útil quando a leitura deve ocorrer antes de continuar a execução do código.
------------------------------------------------------------------------------------ */
try {
    const dadosBrutos = fs.readFileSync(caminhoArquivo, 'utf-8'); // Lendo o arquivo
    const dadosJSON = JSON.parse(dadosBrutos); // Convertendo string JSON em objeto
    console.log("📄 Leitura Síncrona:", dadosJSON);
} catch (erro) {
    console.error("❌ Erro na leitura síncrona:", erro);
}

/* ------------------------------------------------------------------------------------
# Leitura Assíncrona - fs.readFile()
Essa abordagem permite que a execução continue enquanto o arquivo é lido.
Ela é recomendada para evitar bloqueios em aplicações que processam várias tarefas ao mesmo tempo.
------------------------------------------------------------------------------------ */
fs.readFile(caminhoArquivo, 'utf-8', (erro, dadosBrutos) => {
    if (erro) {
        console.error("❌ Erro na leitura assíncrona:", erro);
        return;
    }

    try {
        const dadosJSON = JSON.parse(dadosBrutos); // Convertendo string JSON em objeto
        console.log("📄 Leitura Assíncrona:", dadosJSON);
    } catch (erro) {
        console.error("❌ Erro ao converter JSON:", erro);
    }
});

/* ------------------------------------------------------------------------------------
# Considerações Finais:
- `fs.readFileSync()`: Simples e útil quando a leitura deve ocorrer antes de outras operações.
- `fs.readFile()`: Melhor para desempenho, pois não bloqueia o código.
- Escolha a abordagem conforme a necessidade da sua aplicação.

------------------------------------------------------------------------------------ */
