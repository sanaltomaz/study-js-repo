/* 
====================================================================================
# MANIPULAÇÃO DE OBJETOS EM JAVASCRIPT
====================================================================================

A manipulação de objetos em JavaScript envolve a adição, remoção, atualização 
e iteração sobre as propriedades de um objeto.

====================================================================================
# 1. ADICIONANDO PROPRIEDADES A UM OBJETO
====================================================================================
Podemos adicionar propriedades dinamicamente a um objeto existente.
*/

const usuario = {
    nome: "Marcos",
    idade: 28
};

// Adicionando uma nova propriedade
usuario.email = "marcos@email.com";

console.log(usuario); // { nome: "Marcos", idade: 28, email: "marcos@email.com" }

/* 
====================================================================================
# 2. ATUALIZANDO PROPRIEDADES DE UM OBJETO
====================================================================================
Podemos modificar o valor de uma propriedade diretamente.
*/

usuario.idade = 29;
console.log(usuario.idade); // 29

/* 
====================================================================================
# 3. REMOVENDO PROPRIEDADES DE UM OBJETO
====================================================================================
Podemos usar o operador `delete` para remover propriedades.
*/

delete usuario.email;
console.log(usuario); // { nome: "Marcos", idade: 29 }

/* 
====================================================================================
# 4. ITERANDO SOBRE AS PROPRIEDADES DE UM OBJETO
====================================================================================
Podemos percorrer as propriedades de um objeto usando `for...in` e outros métodos.
*/

// Usando for...in
for (let chave in usuario) {
    console.log(`${chave}: ${usuario[chave]}`);
}
// Saída:
// nome: Marcos
// idade: 29

// Usando Object.keys() para obter todas as chaves
console.log(Object.keys(usuario));// [ 'nome', 'idade' ]

// Usando Object.values() para obter todos os valores
console.log(Object.values(usuario)); // [ 'Marcos', 29 ]

// Usando Object.entries() para obter chave e valor como array
console.log(Object.entries(usuario)); // [ ['nome', 'Marcos'], ['idade', 29] ]

/* 
====================================================================================
# 5. COPIANDO UM OBJETO
====================================================================================
Podemos copiar objetos de forma superficial ou profunda.
*/

// Cópia superficial com spread operator
const copiaUsuario = { ...usuario };
console.log(copiaUsuario); 
// { nome: "Marcos", idade: 29 }

// Cópia profunda usando JSON (para objetos simples)
const usuarioCompleto = {
    nome: "Marcos",
    endereco: {
        cidade: "São Paulo",
        estado: "SP"
    }
};

const copiaProfunda = JSON.parse(JSON.stringify(usuarioCompleto));
copiaProfunda.endereco.cidade = "Rio de Janeiro";

console.log(usuarioCompleto.endereco.cidade); // "São Paulo" (O original não foi modificado)
console.log(copiaProfunda.endereco.cidade); // "Rio de Janeiro"

/* 
====================================================================================
# 6. RESUMO
====================================================================================
- Podemos adicionar, modificar e remover propriedades de um objeto.
- A iteração pode ser feita com `for...in`, `Object.keys()`, `Object.values()`, `Object.entries()`.
- Para copiar objetos usamos `spread operator` para cópia superficial e `JSON.parse(JSON.stringify())`
  para cópias profundas.

====================================================================================
*/

