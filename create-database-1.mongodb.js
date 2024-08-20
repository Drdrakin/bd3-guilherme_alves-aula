/* Nome do banco de dados */
const database = 'bd3-guilherme_alves-aula';

/* Nome do banco da coleção de dados */
const collection = 'livraria';

/* Criar ou acessar o banco de dados */
use(database);

/* Criar uma coleção de dados */
db.createCollection(collection);
