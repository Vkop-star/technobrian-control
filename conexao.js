const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tecnobrian'
});

// Estabelecer conexão com o banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão estabelecida com o banco de dados.');
});

// Suponha que você tenha uma variável que deseja armazenar
// Inserir a variável no banco de dados

// Fechar conexão com o banco de dados
connection.end();
