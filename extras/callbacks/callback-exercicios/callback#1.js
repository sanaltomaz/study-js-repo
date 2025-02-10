/* 1° exercício.
------------------------------------------------------------------------------------
* Utilize o método forEach para imprimir cada elemento 
    de um array juntamente com seu índice.

------------------------------------------------------------------------------------
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
numeros.forEach((num, i) => {
    console.log((`Index: ${i}, Valor: ${num}`));
})
