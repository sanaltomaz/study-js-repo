/* 1° exercício.
------------------------------------------------------------------------------------
* Crie uma função que receba dois arrays e os concatene em um único array.

------------------------------------------------------------------------------------
*/

const a = [1, 2, 3]
const b = [4, 5, 6]

function unirArrays(c, d) {
    const novoArray = c.concat(d)
    return novoArray
}

const e = unirArrays(a,b)
console.log(e);

