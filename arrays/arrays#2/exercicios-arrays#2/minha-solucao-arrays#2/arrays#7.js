/* 7° exercício.
------------------------------------------------------------------------------------
* Adicione um novo elemento (por exemplo,15) na terceira linha e segunda 
    coluna da lista bidimensional matriz criada anteriormente.

------------------------------------------------------------------------------------
*/
const matriz = [[], [], []]

for (let i = 0; i < 9; i++) {
    let g = 0
    if (i >= 6){ g = 2 } else if (i >= 3){ g = 1 } 
    matriz[g].push(i+1)
}

matriz[2].splice(1, 1, 15)
console.log(matriz[2]);
