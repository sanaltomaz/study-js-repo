/* 2° exercício.
------------------------------------------------------------------------------------
* Crie uma função que receba uma array e imprima no console 
    o número do índice e o elemento.

------------------------------------------------------------------------------------
*/

const meuArray = ["Carvão", "Bronze", "Ferro", "Ouro", "Diamante"]

function vareduraArray(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(`Elemento: ${element}`);
        console.log(`Índice: ${i}`);
        
    }
}

vareduraArray(meuArray)