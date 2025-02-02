/* 6° exercício.
------------------------------------------------------------------------------------
* Acesse e imprima o elemento na segunda linha e terceira coluna da lista 
    bidimensional matriz criada no exercício anterior.

------------------------------------------------------------------------------------
*/
const matriz = [[], [], []]

for (let i = 0; i < 9; i++) {
    let g = 0
    if (i >= 6){ g = 2 } else if (i >= 3){ g = 1 } 
    matriz[g].push(i+1)
}
console.log(matriz[1]);
console.log(matriz[2]);
