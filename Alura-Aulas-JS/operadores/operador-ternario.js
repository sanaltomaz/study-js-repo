/* 
OPERADOR TERNÁRIO

------------------------------------------------------------------------------------
O operador ternário é o único em JavaScript que utiliza **três operandos**:
1. A condição, seguida do sinal **?**.
2. O código a ser executado se a condição for **true**, seguido de **:**.
3. O código a ser executado se a condição for **false**.

Esse operador é uma alternativa enxuta ao if/else, especialmente quando a lógica envolve
apenas uma linha de retorno.

Observação: A regra de valores "truthy" e "falsy" em JavaScript também se aplica aqui!
------------------------------------------------------------------------------------
EXEMPLO BÁSICO:
*/
const valor = 50;
const texto = valor < 50 ? "valor insuficiente" : "valor suficiente";
console.log(texto); 
// Resultado: "valor suficiente"

// EXPLICAÇÃO:
// condição ?   caso 'true'   :   caso 'false'
valor < 50 ? "valor insuficiente" : "valor suficiente";

/* 
------------------------------------------------------------------------------------
EXEMPLO DE UTILIZAÇÃO EM FUNÇÕES:
*/
let matriculaAtiva = true;

// Usando if/else:
function verificaMatriculaAtiva() {
    if (matriculaAtiva === true) {
        return "Matrícula ativa no sistema";
    } else {
        return "Matrícula não está ativa";
    }
}
console.log(verificaMatriculaAtiva()); 
// Resultado: "Matrícula ativa no sistema"

// Usando o operador ternário:
function verificaMatriculaAtivaTernario() {
    return matriculaAtiva 
        ? "Matrícula ativa no sistema" 
        : "Matrícula não está ativa";
}
console.log(verificaMatriculaAtivaTernario()); 
// Resultado: "Matrícula ativa no sistema"

/* 
A principal diferença é que o operador ternário permite um único retorno na função, 
tornando o código mais conciso.
------------------------------------------------------------------------------------
EXEMPLO DE UTILIZAÇÃO EM VARIÁVEIS:
*/
let idadeEstudante = 16;

// Usando if/else:
let precisaDeAutorizacao;
if (idadeEstudante < 18) {
    precisaDeAutorizacao = true;
} else {
    precisaDeAutorizacao = false;
}
console.log(precisaDeAutorizacao); 
// Resultado: true

// Usando operador ternário:
const precisaAutorizacao = idadeEstudante < 18 ? true : false;
console.log(precisaAutorizacao); 
// Resultado: true

/* 
Nota: No último exemplo, o nome da variável foi ajustado para evitar conflitos no código.
------------------------------------------------------------------------------------
DICAS IMPORTANTES:

1. O operador ternário é ideal para simplificar condições simples em apenas uma linha.
   Porém, **evite utilizá-lo para lógicas muito complexas**, pois pode dificultar a leitura.

2. Caso o código fique muito longo ou confuso, considere usar um if/else tradicional 
   para melhorar a clareza.
------------------------------------------------------------------------------------
CURIOSIDADE EXTRA:

- Você pode aninhar operadores ternários (usar um dentro do outro), mas isso deve ser feito 
  com cautela para evitar confusões. Exemplo:
*/
const nota = 85;
const resultado = nota >= 90 
    ? "Excelente" 
    : nota >= 70 
        ? "Aprovado" 
        : "Reprovado";

console.log(resultado); 
// Resultado: "Aprovado"

/* 
Embora funcional, esse tipo de código pode ser difícil de ler e entender. 
Analise caso a caso para escolher a melhor abordagem!
*/
