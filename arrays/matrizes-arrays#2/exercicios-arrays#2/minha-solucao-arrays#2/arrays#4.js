/* 4° exercício.
------------------------------------------------------------------------------------
* Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo 
    opções do cardápio de um restaurante. Utilize o método concat para 
    criar um novo array menuCompleto contendo todos os elementos de 
    menuPrincipal seguidos pelos elementos de menuDeSobremesas.

------------------------------------------------------------------------------------
*/

const menuPrincipal = ['Paulista', 'Galinhada', 'Viradinha']
const menuDeSobremesas = ['Sorvete', 'Mouse', 'Romeu e Julieta']

const cardapio = menuPrincipal.concat(menuDeSobremesas)

console.log(cardapio);
