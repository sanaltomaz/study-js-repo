/* 5° exercício.
------------------------------------------------------------------------------------
* Imagine um sistema que determina se um usuário tem idade suficiente para comprar 
    o ingresso para um show. Declare duas variáveis que determinem a idade mínima 
    e qual a idade do usuário e utilize estruturas condicionais (if, else) para 
    determinar se o usuário pode realizar a compra.

------------------------------------------------------------------------------------
*/
let idade = 20;
let idademinima = 16

// if/else
if (idade >= idademinima){
    console.log("Pode comprar ingressos.");
} else { 
    console.log(`Você precisa de no minimo ${idademinima} para comprar ingressos.`);
};

/* Operador ternario
const compraIngresso = idade > idademinima
    ? console.log(`Com ${idade} anos você pode comprar os ingressos.`)
    : console.log(`Você precisa de ${idademinima} anos para comprar ingressos.`);
*/