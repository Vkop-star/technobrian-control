import('./conexao.js')

function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == login && senha == senha) {
        alert("login realizado com sucesso");
        location.href = "home.html";
    } else {
        alert("usuario ou senha invalidos");
    }

}