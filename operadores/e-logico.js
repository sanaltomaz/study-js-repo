/* 
------------------------------------------------------------------------------------
# Operador Lógico `&&` (E lógico) em Node.js

------------------------------------------------------------------------------------
## 1. Introdução
O operador lógico `&&` (E lógico) é usado para avaliar **duas expressões** e 
retorna `true` apenas se **ambas forem verdadeiras**. 
Caso qualquer uma delas seja `false`, o resultado será `false`.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição básica**:  
  O operador `&&` avalia da esquerda para a direita e para de executar assim que encontra um valor "falsy". 
  Se todos os valores forem "truthy", retorna o último valor avaliado.

- **Quando usar**:  
  - Para validar múltiplas condições em um bloco `if`.
  - Para executar uma operação condicionalmente quando todas as condições forem verdadeiras.

- **Benefícios**:  
  - Simplifica verificações de múltiplas condições.
  - Reduz a necessidade de estruturas aninhadas de `if`.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Verificação Simples de Condições
------------------------------------------------------------------------------------
*/
const idade = 20;
const possuiHabilitacao = true;

if (idade >= 18 && possuiHabilitacao) {
    console.log("Pode dirigir.");
} else {
    console.log("Não pode dirigir.");
}
// Resultado esperado: "Pode dirigir."

/* 
------------------------------------------------------------------------------------
### Exemplo 2: Encadeamento de Verificações
------------------------------------------------------------------------------------
*/
const saldo = 1500;
const limiteCredito = 1000;

if (saldo > 0 && saldo >= limiteCredito) {
    console.log("Pode realizar a compra.");
} else {
    console.log("Saldo insuficiente ou limite abaixo do necessário.");
}
// Resultado esperado: "Pode realizar a compra."

/* 
------------------------------------------------------------------------------------
### Exemplo 3: Avaliação de Valores "Truthy" e "Falsy"
------------------------------------------------------------------------------------
*/
console.log(0 && "Texto"); // Resultado: 0 (primeiro valor falsy encontrado)
console.log("Texto" && null); // Resultado: null (primeiro valor falsy encontrado)
console.log("Texto" && 42); // Resultado: 42 (todos os valores são truthy)

/* 
------------------------------------------------------------------------------------
## 4. Considerações Finais
- O operador `&&` avalia valores "truthy" e "falsy" em JavaScript/Node.js:
  - **Falsy**: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
  - **Truthy**: Qualquer valor diferente dos citados acima.
- É uma ferramenta poderosa para criar condições concisas, 
mas tome cuidado ao utilizá-la com valores que podem ser ambiguamente "falsy" (como `0` ou strings vazias).

------------------------------------------------------------------------------------
*/
