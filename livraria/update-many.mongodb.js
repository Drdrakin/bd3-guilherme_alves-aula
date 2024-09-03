const database = 'bd3-guilherme_alves-aula';

const collection = 'livraria';

const query = {autor: /tolkien/i};
const data = { $set: {valor: 300}};

use(database);

db[collection].updateMany(
    query,
    data
)