# JSON (JavaScript Object Notation)

## 1. Introdução
JSON (JavaScript Object Notation) é um formato leve para intercâmbio de dados. Ele é amplamente utilizado para comunicação entre sistemas, especialmente em APIs e armazenamento de configurações, devido à sua estrutura simples e fácil manipulação.

## 2. Estrutura do JSON
JSON é baseado em dois tipos principais de estrutura:
- **Objetos**: Um conjunto de pares `chave: valor`, semelhante a um objeto em JavaScript.
- **Arrays**: Uma lista ordenada de valores, semelhante a um array em JavaScript.

### Exemplo de um JSON simples:
```json
{
  "nome": "Carlos",
  "idade": 28,
  "cidade": "Rio de Janeiro"
}
```

## Exemplo de um JSON com um array:
```json
{
  "nome": "Mariana",
  "hobbies": ["ler", "viajar", "fotografia"]
}
```

### Exemplo de um JSON mais complexo:
```json
{
  "empresa": "Tech Solutions",
  "funcionarios": [
    {
      "nome": "Carlos",
      "cargo": "Desenvolvedor",
      "idade": 28
    },
    {
      "nome": "Mariana",
      "cargo": "Designer",
      "idade": 25
    }
  ]
}
```

## 3. Regras do JSON
- As chaves devem estar sempre entre aspas duplas ("").
- Os valores podem ser:
    * Strings: "texto"
    * Números: 10, 3.14
    * Booleanos: true, false
    * Arrays: ["item1", "item2"]
    * Objetos: { "chave": "valor" }
    * Nulo: null
    * Comentários não são permitidos em JSON.

## 4. Diferenças entre JSON e Objetos JavaScript
Embora a estrutura seja semelhante, existem diferenças importantes:
Em JavaScript, as chaves de um objeto podem ser escritas sem aspas, mas no JSON as chaves devem estar entre aspas duplas.
JSON não aceita funções ou undefined como valores.

- **Exemplo** de um objeto JavaScript (válido):
```js
const objeto = {
  nome: "Lucas",
  idade: 22
};
```
- **Exemplo** do mesmo objeto em JSON (válido):
```json
{
  "nome": "Lucas",
  "idade": 22
}
```

### 5. Considerações Finais
- JSON é amplamente usado para transmissão e armazenamento de dados.
- Segue um formato padronizado que facilita a comunicação entre sistemas.
- Pode ser facilmente convertido para objetos JavaScript e vice-versa.
- Seu uso é essencial em aplicações web, especialmente para comunicação com APIs.

