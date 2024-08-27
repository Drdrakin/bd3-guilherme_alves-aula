const database = 'bd3-guilherme_alves-aula';

const collection = 'livraria';

use(database);

//find() sem parametro puxa todos os dados
db[collection].find();