const database = 'bd3-guilherme_alves-aula';

const collection = 'livraria';

const condition = {autor: /isaac asimov/i};

use(database);

db[collection].deleteMany(
    condition,
)