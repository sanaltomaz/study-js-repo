/* 5° exercício.
------------------------------------------------------------------------------------
* Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: 
    a base e o expoente. 
    A função deve calcular a potência da base elevada ao expoente e 
    retornar o resultado.

------------------------------------------------------------------------------------
*/
let base = 2;
let expoente = 5;

const calculaPotencia = (base, expoente) => Math.pow(base, expoente);

console.log(`A potencia da base ${base} ^ ${expoente} = ${calculaPotencia(base, expoente)}`);