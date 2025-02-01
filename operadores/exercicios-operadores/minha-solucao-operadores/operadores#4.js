/* 4° exercício.
------------------------------------------------------------------------------------
* Declare duas variáveis booleanas e use o operador OU para verificar se pelo menos 
    uma delas é verdadeira. 
    Exiba o resultado no console.

------------------------------------------------------------------------------------
*/

let primeira = false;
let segunda = true;

const validador = primeira || segunda
    ? console.log("Validações com sucesso.")
    : console.log("Validações invalidas.");    