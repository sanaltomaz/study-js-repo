/* 3° exercício.
------------------------------------------------------------------------------------
* Você recebeu um array numeros contendo valores numéricos. 
  Crie um programa que verifique se um número específico está presente nesse array. 
  Se estiver, o programa deve retornar a posição (índice) desse número. 
  Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

------------------------------------------------------------------------------------
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
const num = 1
const verificar = numeros.findIndex(num)
if (verificar === -1) {
    console.log(`Posição indefinida: ${verificar}`);
}else {
    console.log(`Posição na lista: ${verificar}`);
}