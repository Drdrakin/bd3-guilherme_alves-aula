const database = 'bd3-guilherme_alves-aula';

const collection = 'livraria';

const query = {titulo: "As Cavernas de Aço"};
const data = { $set: {valor: 290}};

use(database);

// O update One para no primeiro registro de documento que aceita
//O critério de busca passado
db[collection].updateOne(
    query,
    data
)