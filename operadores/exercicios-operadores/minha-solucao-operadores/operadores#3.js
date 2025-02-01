/* 3° exercício.
------------------------------------------------------------------------------------
* Considere uma situação em que você está verificando se um usuário está logado
    e tem permissão de administrador para acessar determinada funcionalidade. 
    Utilize variáveis booleanas para simular essas condições e use o operador AND 
    para verificar se ambas são verdadeiras.

------------------------------------------------------------------------------------
*/

let log = true
let admin = false

const permissao = log
    ? admin
        ? console.log("Usuario logado com as devidas permissões.")
        : console.log("Usuario logado com permissões limitadas.")
    : console.log("Usuario não logado.");