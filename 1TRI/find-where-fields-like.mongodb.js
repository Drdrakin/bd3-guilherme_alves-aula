const database = 'bd3-guilherme_alves-aula';

const collection = 'livraria';

use(database);

const query = {"descricao" : /robô/i };

//O famoso 'LIKE' é usado no mongo db com / antes e depois
//O argumento opcional i pode ser declarado para dizer especificar
//"case INSENSITIVE" 
db[collection].find(
        query,
        {"_id" : 0, "codigo" : 0}
    );

