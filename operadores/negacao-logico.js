/* 
------------------------------------------------------------------------------------
# Operador Lógico `!` (Negação) em Node.js

------------------------------------------------------------------------------------
## 1. Introdução
O operador lógico `!` (Negação) é usado para **inverter o valor de uma expressão booleana**. 
- Se a expressão for `true`, o operador `!` a transforma em `false`.
- Se a expressão for `false`, o operador `!` a transforma em `true`.

Esse operador é essencial quando precisamos verificar a condição contrária de uma expressão.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição básica**:  
  O operador `!` realiza a **negação lógica** de uma expressão, ou seja, ele altera o valor de uma expressão booleana, invertendo-a.

- **Quando usar**:  
  - Quando for necessário **inverter uma condição booleana**.
  - Em situações onde precisamos verificar a **condição contrária** de uma variável ou expressão.

- **Benefícios**:  
  - Permite simplificar a lógica ao inverter diretamente os valores booleanos.
  - Útil em **condições de controle de fluxo** quando é necessário verificar se algo **não ocorre**.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Invertendo uma Condição Booleana
------------------------------------------------------------------------------------
*/
const ligado = true;

if (!ligado) {
    console.log("Está desligado.");
} else {
    console.log("Está ligado.");
}
// Resultado esperado: "Está ligado."

/* 
------------------------------------------------------------------------------------
### Exemplo 2: Verificando a Negação de uma Condição
------------------------------------------------------------------------------------
*/
const temChave = false;

if (!temChave) {
    console.log("Você não tem a chave.");
} else {
    console.log("Você tem a chave.");
}
// Resultado esperado: "Você não tem a chave."

/* 
------------------------------------------------------------------------------------
### Exemplo 3: Utilizando com Valores Falsy
------------------------------------------------------------------------------------
*/
console.log(!0); // Resultado: true (0 é falsy)
console.log(!"Texto"); // Resultado: false (não vazio é truthy)
console.log(!null); // Resultado: true (null é falsy)

/* 
------------------------------------------------------------------------------------
## 4. Considerações Finais
- O operador `!` é extremamente útil quando precisamos inverter condições booleanas ou trabalhar com valores "truthy" e "falsy" em JavaScript.
- É importante ter cuidado ao utilizar o operador `!` com valores que possam ser considerados "falsy", como `0`, `""`, `null`, `undefined`, e `NaN`. Isso pode alterar o comportamento esperado de algumas expressões.
- O operador de negação `!` também é uma ferramenta poderosa para simplificar a lógica de programação e torna as verificações de condição mais intuitivas.

------------------------------------------------------------------------------------
*/
