/* 
====================================================================================
# MÉTODOS EM UM OBJETO EM JAVASCRIPT
====================================================================================
Em JavaScript, métodos são funções associadas a um objeto. Eles permitem que os objetos
executem ações baseadas em suas propriedades e interajam com os dados internos.

====================================================================================
# 1. DECLARAÇÃO DE MÉTODOS EM OBJETOS
====================================================================================
Um método pode ser declarado dentro de um objeto como uma função.
*/

const usuario = {
    nome: "Ana",
    idade: 25,
    saudacao: function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};

// Chamando o método
usuario.saudacao(); // Saída: "Olá, meu nome é Ana e tenho 25 anos."

/* 
====================================================================================
# 2. MÉTODOS USANDO A SINTAXE REDUZIDA
====================================================================================
Desde o ES6, podemos declarar métodos de forma mais curta dentro de objetos.
*/

const calculadora = {
    soma(a, b) {
        return a + b;
    },
    multiplicacao(a, b) {
        return a * b;
    }
};

console.log(calculadora.soma(5, 3)); // Saída: 8
console.log(calculadora.multiplicacao(4, 2)); // Saída: 8

/* 
====================================================================================
# 3. USO DE `this` EM MÉTODOS DE OBJETOS
====================================================================================
A palavra-chave `this` dentro de um método refere-se ao próprio objeto.
*/

const contaBancaria = {
    titular: "Carlos",
    saldo: 1000,
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }
};

contaBancaria.depositar(500); // Saída: "Depósito de R$500 realizado. Saldo atual: R$1500"

/* 
====================================================================================
# 4. MÉTODOS EM OBJETOS ANINHADOS
====================================================================================
Objetos podem conter outros objetos, e seus métodos podem acessar propriedades internas.
*/

const empresa = {
    nome: "TechCorp",
    localizacao: {
        cidade: "São Paulo",
        estado: "SP"
    },
    detalhes() {
        console.log(`Empresa: ${this.nome}, Localizada em: ${this.localizacao.cidade}, ${this.localizacao.estado}`);
    }
};

empresa.detalhes(); // Saída: "Empresa: TechCorp, Localizada em: São Paulo, SP"

/* 
====================================================================================
# 5. MÉTODOS COM PARÂMETROS E RETORNOS
====================================================================================
Métodos podem aceitar parâmetros e retornar valores.
*/

const aluno = {
    nome: "Lucas",
    notas: [8, 9, 7],
    calcularMedia() {
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }
};

console.log(`Média do aluno: ${aluno.calcularMedia()}`); // Saída: "Média do aluno: 8"

/* 
====================================================================================
# 6. RESUMO
====================================================================================
- Métodos são funções associadas a um objeto.
- Podemos definir métodos usando funções normais ou a sintaxe reduzida do ES6.
- O `this` dentro de um método se refere ao próprio objeto.
- Métodos podem acessar e modificar propriedades do objeto.
- Objetos aninhados podem conter métodos que interagem com seus dados internos.

====================================================================================
*/

