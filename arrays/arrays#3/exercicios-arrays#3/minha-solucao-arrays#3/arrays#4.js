/* 4° exercício.
------------------------------------------------------------------------------------
* Crie uma função que receba uma array de números inteiros 
    e retorne o menor valor e o maior valor da array, no seguinte 
    formato: 'o menor número é X e o maior número é Y'.

------------------------------------------------------------------------------------
*/
const numeros = [5, 10, 17, 2, 15]

function maiorNumeroArray(array) {
    let maiorNumero = 0
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element > maiorNumero) {
            maiorNumero = element
        }
    }
    console.log(`Maior número da Lista: ${maiorNumero}`);
    
}

maiorNumeroArray(numeros)