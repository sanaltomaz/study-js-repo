/*
------------------------------------------------------------------------------------
# O QUE É UM OBJETO E QUAL SUA ESTRUTURA EM JAVASCRIPT
------------------------------------------------------------------------------------

====================================================================================
# 1. Introdução
====================================================================================
Os objetos em JavaScript são estruturas de dados que permitem armazenar e organizar informações de forma estruturada, 
utilizando pares **chave: valor**. Eles são amplamente utilizados para representar entidades do mundo real, 
como um usuário, um produto ou uma configuração de sistema.

====================================================================================
# 2. ESTRUTURA DE UM OBJETO
====================================================================================
Um objeto em JavaScript é definido utilizando chaves `{}` e seus elementos internos são organizados como **pares chave: valor**.
*/

// 2.1. EXEMPLO BÁSICO DE UM OBJETO
const usuario = {
    nome: "Alice",
    idade: 25,
    email: "alice@email.com"
};

console.log(usuario); // Resultado: { nome: 'Alice', idade: 25, email: 'alice@email.com' }

/*
- `nome`, `idade` e `email` são **chaves** do objeto.
- "Alice", `25` e "alice@email.com" são os **valores** correspondentes.
*/

/* 
====================================================================================
# 3. CARACTERÍSTICAS IMPORTANTES DOS OBJETOS
====================================================================================
3.1. **As chaves de um objeto são strings por padrão**:
   - Mesmo que você não coloque aspas nas chaves, internamente o JavaScript trata elas como strings.

3.2. **Os valores podem ser de qualquer tipo de dado**:
   - Strings, números, booleanos, arrays, funções e até mesmo outros objetos.

3.3. **Podemos acessar e modificar valores das chaves**:
   - Acessamos com `objeto.chave` ou `objeto["chave"]`.

====================================================================================
# 4. CRIANDO E MODIFICANDO OBJETOS
====================================================================================
*/

// 4.1. ACESSANDO VALORES DE UM OBJETO
console.log(usuario.nome); // Resultado: Alice
console.log(usuario["email"]); // Resultado: alice@email.com

// 4.2. ADICIONANDO NOVAS PROPRIEDADES
usuario.telefone = "9999-9999";
console.log(usuario); // Resultado: { nome: 'Alice', idade: 25, email: 'alice@email.com', telefone: '9999-9999' }

// 4.3. MODIFICANDO VALORES EXISTENTES
usuario.idade = 26;
console.log(usuario.idade); // Resultado: 26

/* 
====================================================================================
# 3. OBJETOS ANINHADOS
====================================================================================
Os valores dentro de um objeto podem ser outros objetos, permitindo estruturar dados de maneira mais organizada.
*/

const empresa = {
  nome: "Tech Solutions",
  endereco: {
    rua: "Av. Principal",
    numero: 123
  },
  funcionarios: ["Alice", "Bob", "Carlos"]
};

console.log(empresa.endereco.rua); // Resultado: Av. Principal
console.log(empresa.funcionarios[1]); // Resultado: Bob

/* 
====================================================================================
# 3. CONSIDERAÇÕES FINAIS
====================================================================================
- Objetos são coleções de pares chave-valor usados para estruturar dados.
- Chaves são strings por padrão, mas os valores podem ser de qualquer tipo.
- Podemos acessar, modificar e adicionar propriedades facilmente.
- Objetos podem conter outros objetos e arrays para representar estruturas complexas.

*/

