const database = 'bd3-guilherme_alves-aula';

const collection = 'livraria';

use(database);

//É possível usar o método de procura com propriedades que agem como clausulas sql para filtragem de dados
//
//Por padrão, ele chama todos os campos que atendem ao critério
db[collection].find({autor: /isaac/i});

