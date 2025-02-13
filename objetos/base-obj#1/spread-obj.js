/* 
====================================================================================
# COMO USAR O SPREAD OPERATOR PARA DECOMPOR E JUNTAR OBJETOS EM JAVASCRIPT
====================================================================================
O Spread Operator (`...`) permite copiar e espalhar propriedades de um objeto para 
outro de maneira eficiente. Ele pode ser usado para decompor (extrair partes de um objeto) 
e para combinar objetos.

====================================================================================
# 1. DECOMPONDO OBJETOS COM SPREAD OPERATOR
====================================================================================
Podemos extrair propriedades específicas de um objeto e armazenar o restante em outra variável.
*/

const usuario = {
    nome: "Carlos",
    idade: 25,
    cidade: "São Paulo",
    profissao: "Engenheiro"
};

// Extraindo 'nome' e 'idade', e armazenando o restante em 'resto'
const { nome, idade, ...resto } = usuario;

console.log(nome);  // Saída: "Carlos"
console.log(idade); // Saída: 25
console.log(resto); // Saída: { cidade: "São Paulo", profissao: "Engenheiro" }

/* 
====================================================================================
# 2. JUNTANDO OBJETOS COM SPREAD OPERATOR
====================================================================================
Podemos mesclar dois ou mais objetos em um novo objeto.
*/

const endereco = {
    rua: "Rua das Flores",
    numero: 123
};

const usuarioCompleto = { ...usuario, ...endereco };

console.log(usuarioCompleto);
/* 
Saída:
{
  nome: "Carlos",
  idade: 25,
  cidade: "São Paulo",
  profissao: "Engenheiro",
  rua: "Rua das Flores",
  numero: 123
}
*/

/* 
====================================================================================
# 3. ATUALIZANDO PROPRIEDADES DE UM OBJETO COM SPREAD
====================================================================================
Podemos criar um novo objeto baseado em um existente, modificando apenas algumas propriedades.
*/

const usuarioAtualizado = { ...usuario, idade: 26, cidade: "Rio de Janeiro" };

console.log(usuarioAtualizado);
/* 
Saída:
{
  nome: "Carlos",
  idade: 26,
  cidade: "Rio de Janeiro",
  profissao: "Engenheiro"
}
*/

/* 
====================================================================================
# 4. USO PRÁTICO: CLONANDO OBJETOS COM SPREAD
====================================================================================
O Spread Operator também pode ser usado para clonar objetos.
*/

const copiaUsuario = { ...usuario };
console.log(copiaUsuario);
/* 
Saída:
{
  nome: "Carlos",
  idade: 25,
  cidade: "São Paulo",
  profissao: "Engenheiro"
}
*/

/* 
====================================================================================
# 5. CUIDADO COM CÓPIA SUPERFICIAL EM OBJETOS ANINHADOS
====================================================================================
Se um objeto contém objetos aninhados, o Spread Operator apenas copia referências.
Isso significa que mudanças na cópia podem afetar o original.
*/

const pessoa = {
    nome: "Ana",
    endereco: {
        cidade: "Curitiba",
        rua: "Avenida Central"
    }
};

const copiaPessoa = { ...pessoa };
copiaPessoa.endereco.cidade = "Porto Alegre";

console.log(pessoa.endereco.cidade); // Saída: "Porto Alegre" (O original foi alterado!)
console.log(copiaPessoa.endereco.cidade); // Saída: "Porto Alegre"

/* 
SOLUÇÃO: Para clonagem profunda, use JSON.parse(JSON.stringify(objeto)) ou bibliotecas como Lodash.
*/

/* 
====================================================================================
# 6. RESUMO
====================================================================================
- O Spread Operator (`...`) permite decompor objetos e armazenar partes separadamente.
- É útil para juntar objetos, criando novas combinações sem modificar os originais.
- Pode ser usado para clonar objetos, mas faz apenas uma cópia superficial.
- Para evitar mudanças acidentais em objetos aninhados, utilize técnicas de clonagem profunda.
====================================================================================
*/

