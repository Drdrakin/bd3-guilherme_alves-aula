# BD III - NoSQL
Esse repositório possui o objetivo de guardar arquivos didáticos criados e explorados durante as aulas de Banco de Dados III na Etec de Embu.

O atual consta com exemplos para manipulação de dados do MongoDB, junto com descrições para maior compreensão do conceito.

## NoSQL

Bancos de dados não relacionais ou “NoSQL” são bancos de dados que não se baseiam totalmente em tabelas, campos e relacionamentos com regras rígidas como os bancos de dados relacionais, geralmente são baseados em arquivos e não tabelas, esses arquivos armazenam os dados em uma estrutura muito parecido com o JSON e cada estrutura de um arquivo é completamente independente, ou seja, podem ser modificadas livremente sem prejuízo algum aos outros arquivos.

## Mongo DB

O Mongodb é um banco não relacional de documentos.

## Operadores para Queries

### Operadores de comparação MongoDB

``` $gt``` 'Greater Than'

``` $gte``` 'Greater Than and Equal'

``` $lt``` 'Lesser Than'

``` $lte``` 'Lesser Than and Equal'

### Operadores lógicos
Todas as condições pertencentes a um operador lógico são envolvidas em um array como nos exemplos

``` $and ``` Une dois parâmetros de query, para obter um resultado com várias condições. Exemplo:
```js 
db[collection].find(
{   $and: [
    {categoria: {$eq: "Fantasia Heroica"}},
    {valor: {$lte: 100}}
]})
```


``` $not ```   

``` $nor ```   

``` $or ``` Retorna um resultado que atende a pelo menos uma das condições declaradas. Exemplo:

```js
db[collection].find(
{   $or: [
    {categoria: {$eq: "Fantasia Heroica"}},
    {valor: {$lte: 100}}
]})
```

### Ordenação

É possível ordenar os resultados trazidos pelo ```find``` com métodos Mongo, um exemplo é ordenação crescente e decrescente, feita da seguinte forma:

Decrescente
```js
db[collection].find(
    {   
        autor: "J.R.R Tolkien"
    }
).sort({valor:-1})
```

Crescente
```js
db[collection].find(
    {   
        autor: "J.R.R Tolkien"
    }
).sort({valor:1})
```