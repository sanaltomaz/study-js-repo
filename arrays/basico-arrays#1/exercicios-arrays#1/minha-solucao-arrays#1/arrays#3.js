/* 3° exercício.
------------------------------------------------------------------------------------
* Crie um array vazio chamado meuArray e adicione 3 números inteiros de 
    sua escolha utilizando o método push(). Imprima no console os itens 
    presentes no array para verificar se os números foram adicionados. 
    Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro 
    do seu valor atual. Imprima no console o array atualizado para 
    verificar a mudança.

------------------------------------------------------------------------------------
*/

const meuArray = [1, 2, 3];

function adicionarElementoArray(array, elemento) {
    if (elemento in array === true) {
        console.log(`Elemento ${elemento} já existente no array.`);
        console.log("Nada foi alterado.");
    } else {
        array.push(elemento);
        console.log(`Elemento ${elemento} foi adicionado.`);
        console.log(`Array atualizado ${array}`);
    };
}
adicionarElementoArray(meuArray, 5)
// Elemento 5 foi adicionado.
// Array atualizado 1,2,3,5
adicionarElementoArray(meuArray, 2)
// Elemento 2 já existente no array.
// Nada foi alterado.