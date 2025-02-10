/* 5° exercício.
------------------------------------------------------------------------------------
* Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada 
    elemento seja uma matriz 3x3 com valores iniciando em 1 e 
    aumentando em 1 a cada elemento.
    Dicas:
    comece com um array vazio, por exemplo const matriz = [] e adicione 
    valores nele com push;  
    você pode resolver usando um for dentro de outro for.

------------------------------------------------------------------------------------
*/

const matriz = [[], [], []]

for (let i = 0; i < 9; i++) {
    let g = 0
    if (i >= 6){ g = 2 } else if (i >= 3){ g = 1 } 
    matriz[g].push(i+1)
}
console.log(matriz);

