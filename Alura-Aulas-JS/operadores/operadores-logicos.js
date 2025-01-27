/* 
OPERADORES LÓGICOS

------------------------------------------------------------------------------------
O operador && (E lógico) retorna true apenas se **ambos os operandos** forem true.
Caso contrário, retorna false.
------------------------------------------------------------------------------------
EXEMPLO:
*/
const idade = 25;
const possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
    console.log("Pode dirigir, possui idade suficiente e carteira de motorista.");
} else {
    console.log("Não pode dirigir.");
}
// Resultado: Pode dirigir, possui idade suficiente e carteira de motorista.

/* 
------------------------------------------------------------------------------------
O operador || (OU lógico) retorna true se pelo menos um dos operandos for true.
Retorna false apenas se ambos os operandos forem false.
------------------------------------------------------------------------------------
EXEMPLO:
*/
const temExperiencia = true;
const temDiploma = false;

if (temExperiencia || temDiploma) {
    console.log("Pode se candidatar ao emprego, pois possui experiência ou diploma.");
} else {
    console.log("Não pode se candidatar ao emprego.");
}
// Resultado: Pode se candidatar ao emprego, pois possui experiência ou diploma.

/* 
------------------------------------------------------------------------------------
O operador ! (NÃO lógico ou negação) inverte o valor do operando.
Se o operando for true, ! retorna false.
Se o operando for false, ! retorna true.
------------------------------------------------------------------------------------
EXEMPLO:
*/
const chuva = false;

if (!chuva) {
    console.log("Não está chovendo. Pode sair de casa.");
} else {
    console.log("Está chovendo. Melhor ficar em casa.");
}
// Resultado: Não está chovendo. Pode sair de casa.

/* 
------------------------------------------------------------------------------------
CURIOSIDADE EXTRA:
Os operadores lógicos em JavaScript avaliam valores "truthy" e "falsy".
Valores falsy incluem: false, 0, "", null, undefined, NaN.
Tudo o mais é considerado "truthy".
------------------------------------------------------------------------------------
EXEMPLOS:
*/
console.log(0 || "Texto padrão"); // Resultado: "Texto padrão" (0 é falsy)
console.log("Texto" && "Outro texto"); // Resultado: "Outro texto" (Ambos são truthy)
console.log(!null); // Resultado: true (null é falsy)
