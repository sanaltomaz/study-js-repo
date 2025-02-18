// Manipulando e filtrando dados de um arquivo JSON com Node.js.

const fs = require('fs'); // Importa o módulo File System (fs) para manipular arquivos

// Função para ler um arquivo JSON
function lerArquivoJSON(caminho) {
  try {
    // Lê o conteúdo do arquivo de forma síncrona e converte para um objeto JavaScript
    const dados = fs.readFileSync(caminho, 'utf-8');
    return JSON.parse(dados);
  } catch (erro) {
    // Caso ocorra um erro (arquivo não encontrado, formato inválido, etc.), ele será tratado aqui
    console.error('❌ Erro ao ler o arquivo JSON:', erro.message);
    return null;
  }
}

// Função para converter um objeto JSON separado em um array de objetos
function converterParaArray(objetoUsuarios) {
  return Object.values(objetoUsuarios);
}

// Função para filtrar usuários por idade mínima
function filtrarPorIdadeMinima(usuarios, idadeMinima) {
  return usuarios.filter(usuario => usuario.idade >= idadeMinima);
}

// Função para filtrar usuários por cidade específica
function filtrarPorCidade(usuarios, cidade) {
  return usuarios.filter(usuario => usuario.cidade.toLowerCase() === cidade.toLowerCase());
}

// Define o caminho do arquivo JSON
const caminhoArquivo = 'usuarios.json';

// Chama a função para ler o arquivo JSON
const dados = lerArquivoJSON(caminhoArquivo);

if (dados) {
  // Converte o objeto JSON em um array de usuários
  const listaUsuarios = converterParaArray(dados);

  // Exibe a lista completa de usuários
  console.log('📌 Lista completa de usuários:');
  console.table(listaUsuarios);

  // Filtra e exibe usuários com 25 anos ou mais
  console.log('\n🔎 Usuários com 25 anos ou mais:');
  console.table(filtrarPorIdadeMinima(listaUsuarios, 25));

  // Filtra e exibe usuários da cidade de São Paulo
  console.log('\n🌆 Usuários da cidade de São Paulo:');
  console.table(filtrarPorCidade(listaUsuarios, 'São Paulo'));
}
