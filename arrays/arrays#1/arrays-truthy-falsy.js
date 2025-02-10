/* 
VALORES TRUTHY E FALSY EM JAVASCRIPT

------------------------------------------------------------------------------------
DEFINIÇÃO:
Em JavaScript, um valor **truthy** é qualquer valor que é avaliado como verdadeiro quando convertido para um contexto booleano. 
Em contraste, um valor **falsy** é avaliado como falso quando convertido para um contexto booleano.

------------------------------------------------------------------------------------
EXEMPLOS DE VALORES TRUTHY:
1. Qualquer string não vazia ("Hello", "0", etc.)
2. Qualquer número diferente de zero (42, -1, 3.14, etc.)
3. Arrays vazios ([])
4. Objetos vazios ({})
5. A própria palavra-chave `true`

------------------------------------------------------------------------------------
EXEMPLOS DE USO (TRUTHY):
*/
if ("Texto") {
  console.log("Esta string não vazia é truthy");
}

if (42) {
  console.log("Este número não zero é truthy");
}

if ([]) {
  console.log("Este array vazio é truthy");
}

if ({}) {
  console.log("Este objeto vazio é truthy");
}

/* 
EXEMPLOS DE VALORES FALSY:
1. `false`
2. `0`
3. `""` (string vazia)
4. `null`
5. `undefined`
6. `NaN` (Not a Number)

------------------------------------------------------------------------------------
EXEMPLOS DE USO (FALSY):
*/
if (0) {
  console.log("Este número não será impresso, pois 0 é falsy");
}

if ("") {
  console.log("Esta string vazia não será impressa, pois é falsy");
}

if (null) {
  console.log("Este valor null não será impresso, pois é falsy");
}

/* 
CONCLUSÃO:
Entender a diferença entre valores **truthy** e **falsy** é essencial para trabalhar com condicionais em JavaScript de maneira eficaz. 
Valores **truthy** são aqueles que, quando convertidos para booleanos, são considerados verdadeiros, 
enquanto valores **falsy** são considerados falsos.
*/
