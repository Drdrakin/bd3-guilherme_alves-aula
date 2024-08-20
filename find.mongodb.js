const database = 'bd3-guilherme_alves-aula';

const collection = 'livraria';

use(database);

db[collection].find({"codigo": "4"});