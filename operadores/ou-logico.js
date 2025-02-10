/* 
------------------------------------------------------------------------------------
# Operador Lógico `||` (OU lógico) em Node.js

------------------------------------------------------------------------------------
## 1. Introdução
O operador lógico `||` (OU lógico) é usado para avaliar **duas ou mais expressões** 
e retorna `true` se **pelo menos uma delas for verdadeira**. 
Caso todas sejam falsas, o resultado será `false`.

------------------------------------------------------------------------------------
## 2. Descrição do Funcionamento
- **Definição básica**:  
  O operador `||` avalia da esquerda para a direita e para de executar assim que 
  encontra um valor "truthy". Se todos os valores forem "falsy", retorna o último valor avaliado.

- **Quando usar**:  
  - Para verificar se **qualquer uma de várias condições** é verdadeira.
  - Para definir valores padrão (fallback) caso uma variável tenha um valor "falsy".

- **Benefícios**:  
  - Simplicidade em verificações múltiplas.
  - Pode ser usado para inicialização de valores padrão.

------------------------------------------------------------------------------------
## 3. Exemplos Práticos

### Exemplo 1: Verificação Simples de Condições
------------------------------------------------------------------------------------
*/
const temExperiencia = false;
const temDiploma = true;

if (temExperiencia || temDiploma) {
    console.log("Pode se candidatar ao emprego.");
} else {
    console.log("Não atende aos requisitos.");
}
// Resultado esperado: "Pode se candidatar ao emprego."

/* 
------------------------------------------------------------------------------------
### Exemplo 2: Valor Padrão com `||`
------------------------------------------------------------------------------------
*/
const nomeUsuario = ""; // String vazia é "falsy"
const nomePadrao = nomeUsuario || "Convidado";

console.log(`Bem-vindo, ${nomePadrao}!`);
// Resultado esperado: "Bem-vindo, Convidado!"

/* 
------------------------------------------------------------------------------------
### Exemplo 3: Avaliação de Valores "Truthy" e "Falsy"
------------------------------------------------------------------------------------
*/
console.log(false || "Texto"); // Resultado: "Texto" (primeiro valor truthy encontrado)
console.log(0 || null || "Valor padrão"); // Resultado: "Valor padrão" (primeiro valor truthy encontrado)
console.log(undefined || false); // Resultado: false (todos os valores são falsy)

/* 
------------------------------------------------------------------------------------
## 4. Considerações Finais
- O operador `||` avalia valores "truthy" e "falsy" em JavaScript/Node.js:
  - **Falsy**: `false`, `0`, `""`, `null`, `undefined`, `NaN`.
  - **Truthy**: Qualquer valor diferente dos citados acima.
- Ele é frequentemente usado para fornecer valores padrão (como no caso de inicialização de variáveis).
- Cuidado com possíveis resultados inesperados ao trabalhar com valores como `0` ou strings vazias, 
  já que ambos são considerados "falsy".

------------------------------------------------------------------------------------
*/
