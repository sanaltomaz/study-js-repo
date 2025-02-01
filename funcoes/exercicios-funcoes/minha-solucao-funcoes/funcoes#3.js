/* 3° exercício.
------------------------------------------------------------------------------------
* Crie uma função que receba uma string e verifique se é um palíndromo 
    (uma palavra que é lida da mesma forma de trás para frente) utilizando o método 
    de string reverse(). 
    Retorne true se for um palíndromo e false caso contrário. 
    Imprima o resultado no console.

------------------------------------------------------------------------------------
*/
let frase = "Tempo";

function verificarPolindromo(frase = "") {
    if (frase === ""){
        return console.log("Frase invalida.");
    }

    // remove espaços e caracteres especiais.
    const fraseLimpa = frase.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // reverte a frase
    const fraseRevertida = fraseLimpa.split("").reverse().join("");
    
    if (fraseRevertida === fraseLimpa) {
        return console.log(`A frase ${frase} é um palíndromo.`);
    }else {
        return console.log(`A frase ${frase} não é um palíndromo.`)
    };
};

verificarPolindromo(); // Frase invalida.
verificarPolindromo(frase); // A frase tempo não é um palíndromo.
verificarPolindromo("A man, a plan, a canal, Panama!") 
// A frase A man, a plan, a canal, Panama! é um palíndromo.