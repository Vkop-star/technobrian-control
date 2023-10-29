import('./conexao')
import('./script')

function cadastrar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var nome = document.getElementById('nome').value;
    
    const query = `INSERT INTO usuarios (email, senha, nome) VALUES ('${login}', '${senha}', '${nome}')`;
    
    connection.query(query, (error, results, fields) => {
    if (error) {
    console.error('Erro ao inserir dados:', error);
    return;
    }
    alert('Seja bem vindo ao tecnobrian control!!');
    console.log('Cadastro Concluido com Sucesso!');
    
    });
}
