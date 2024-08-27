const database = 'bd3-guilherme_alves-aula';

const collection = 'livraria';

use(database);

//É possível usar o método de procura com propriedades que agem como clausulas sql para filtragem de dados
//
//Por padrão, ele chama todos os campos que atendem ao critério,
//mas o segundo objeto é reservado para especificar os campos que não serão tragos
//
//Lembre-se que para adicionar mais filtros de adição, use uma vírgula no primeiro objeto
//e o segundo objeto dedique para excluir campos, essas são as definições dos parametros
db[collection].find(
        {"categoria" : "Ficção Científica"},
        {"_id" : 0, "codigo" : 0}
    );

