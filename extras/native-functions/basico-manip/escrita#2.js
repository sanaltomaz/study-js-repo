/* ====================================================================================
# Escrita de Arquivos JSON no Node.js

## Introdução
A escrita de arquivos JSON no Node.js pode ser feita de forma síncrona ou assíncrona
utilizando o módulo `fs` (File System). Ambas as abordagens têm suas vantagens, 
dependendo do contexto do programa.

- `fs.writeFileSync()`: Escreve um arquivo de maneira **síncrona** (bloqueia a execução até finalizar).
- `fs.writeFile()`: Escreve um arquivo de maneira **assíncrona** (não bloqueia a execução, usa callbacks).

==================================================================================== */

// Importando o módulo 'fs' para manipulação de arquivos
const fs = require('fs');

// Criando um objeto com dados para salvar no JSON
const dados = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};

// Convertendo o objeto para uma string JSON formatada
const jsonString = JSON.stringify(dados, null, 2); // O "null, 2" formata o JSON com indentação

// ========================== Escrita Síncrona ==========================
try {
  fs.writeFileSync('dados.json', jsonString);
  console.log("Arquivo JSON salvo com sucesso! (Método Síncrono)");
} catch (erro) {
  console.error("Erro ao salvar o arquivo JSON:", erro);
}

// ========================== Escrita Assíncrona ==========================
fs.writeFile('dados_assincrono.json', jsonString, (erro) => {
  if (erro) {
    console.error("Erro ao salvar o arquivo JSON (Método Assíncrono):", erro);
    return;
  }
  console.log("Arquivo JSON salvo com sucesso! (Método Assíncrono)");
});

/* ====================================================================================
## Considerações Finais
- **fs.writeFileSync()**: Útil quando precisamos garantir que a gravação ocorra antes 
  de continuar a execução do código. Porém, pode bloquear a thread principal.
  
- **fs.writeFile()**: Ideal para aplicações que exigem melhor desempenho e não podem 
  bloquear a execução do programa enquanto gravam arquivos.

Ambos os métodos são amplamente utilizados, e a escolha entre eles depende da necessidade
de controle do fluxo do programa.

==================================================================================== */
