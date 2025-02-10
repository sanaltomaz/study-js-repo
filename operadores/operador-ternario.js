/* 
------------------------------------------------------------------------------------
# Operador Ternário em Node.js

------------------------------------------------------------------------------------
## 1. Introdução
O operador ternário é uma forma **concisa** de realizar uma **condicional simples** em uma única linha. 
- Ele é composto por três partes: uma **condição**, um **resultado para verdadeiro** e um **resultado para falso**.
- A sintaxe é: `condição ? valorSeVerdadeiro : valorSeFalso`.

Esse operador é ideal para substituir estruturas `if-else` simples, tornando o código mais compacto e legível.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição básica**:  
  O operador ternário avalia uma **condição** e retorna um valor dependendo se a condição é `true` ou `false`.

- **Quando usar**:  
  - Quando é necessário **tomar uma decisão simples** entre dois valores.
  - Para **simplificar estruturas condicionais** que ocupariam várias linhas com `if-else`.

- **Benefícios**:  
  - Reduz a quantidade de código, tornando-o mais **legível** e **fácil de manter**.
  - Útil em **atribuições condicionais** ou **retornos de funções** onde a lógica é simples.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Atribuição Condicional com Múltiplas Condições
------------------------------------------------------------------------------------
*/
const idade = 20;
const temCarteira = true;

// Verifica se a pessoa pode dirigir
const podeDirigir = idade >= 18 && temCarteira
    ? "Pode dirigir"
    : idade >= 18
    ? "Pode tirar carteira"
    : "Não pode dirigir";

console.log(podeDirigir); // Resultado esperado: "Pode dirigir"

/* 
------------------------------------------------------------------------------------
### Exemplo 2: Retorno Condicional em Funções com Validação
------------------------------------------------------------------------------------
*/
function calcularDesconto(valorCompra, clientePremium) {
    // Aplica desconto de 20% para clientes premium e 10% para compras acima de 100
    return clientePremium
        ? valorCompra * 0.8 // 20% de desconto
        : valorCompra > 100
        ? valorCompra * 0.9 // 10% de desconto
        : valorCompra; // Sem desconto
}

console.log(calcularDesconto(150, true)); // Resultado esperado: 120 (20% de desconto)
console.log(calcularDesconto(150, false)); // Resultado esperado: 135 (10% de desconto)
console.log(calcularDesconto(80, false)); // Resultado esperado: 80 (sem desconto)

/* 
------------------------------------------------------------------------------------
### Exemplo 3: Uso com Operações Matemáticas e Strings
------------------------------------------------------------------------------------
*/
const numero = 7;

// Verifica se o número é positivo, negativo ou zero e retorna uma mensagem
const mensagem = numero > 0
    ? "O número é positivo"
    : numero < 0
    ? "O número é negativo"
    : "O número é zero";

console.log(mensagem); // Resultado esperado: "O número é positivo"

/* 
------------------------------------------------------------------------------------
### Exemplo 4: Operador Ternário Aninhado para Classificação
------------------------------------------------------------------------------------
*/
const nota = 85;

// Classifica a nota em A, B, C, D ou F
const classificacao = nota >= 90
    ? "A"
    : nota >= 80
    ? "B"
    : nota >= 70
    ? "C"
    : nota >= 60
    ? "D"
    : "F";

console.log(`Classificação: ${classificacao}`); // Resultado esperado: "Classificação: B"

/* 
------------------------------------------------------------------------------------
### Exemplo 5: Uso em Funções de Setas (Arrow Functions)
------------------------------------------------------------------------------------
*/
const saudacao = (hora) => {
    return hora < 12
        ? "Bom dia!"
        : hora < 18
        ? "Boa tarde!"
        : "Boa noite!";
};

console.log(saudacao(14)); // Resultado esperado: "Boa tarde!"
console.log(saudacao(9)); // Resultado esperado: "Bom dia!"
console.log(saudacao(20)); // Resultado esperado: "Boa noite!"

/* 
------------------------------------------------------------------------------------
## 4. Considerações Finais
- O operador ternário é uma ferramenta poderosa para **simplificar decisões simples** em JavaScript.
- Ele deve ser usado com cuidado em situações onde a lógica é **muito complexa**, pois pode comprometer a legibilidade do código.
- É importante evitar o **aninhamento excessivo** de operadores ternários, pois isso pode tornar o código difícil de entender.
- Em casos onde a clareza é mais importante que a concisão, prefira usar estruturas `if-else` tradicionais.

------------------------------------------------------------------------------------
*/