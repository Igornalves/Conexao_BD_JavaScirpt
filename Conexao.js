const { Client } = require('pg');

const client = new Client({
    user: 'igorn',
    host: '127.0.0.1',
    database: 'sistema_de_vendas',
    password: '08901',
    port: 5432, // Porta padrão do PostgreSQL
});

client.connect()
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(err => console.error('Erro ao conectar ao banco de dados', err));

client.query('SELECT * FROM produtos_alimenticios')
    .then(result => console.log(result.rows))
    .catch(err => console.error('Erro ao executar consulta', err))
    .finally(() => client.end());

