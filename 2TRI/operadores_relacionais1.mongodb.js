const database = 'bd3-guilherme_alves-aula';

const collection = 'livraria';

use(database);

/* Seleciona o livro com valor superior a determinado número */
// db[collection].find(
//   {  valor: {
//       $gt: 100
//     }}
// )

/* Seleciona o livro de valor inferior a determinado número */
db[collection].find(
  {  valor: {
      $lt: 100
    }}
)
