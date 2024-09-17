const database = 'bd3-guilherme_alves-aula';

const collection = 'livraria';

const condition = {codigo: "9"};

use(database);

db[collection].deleteOne(
    condition,
)