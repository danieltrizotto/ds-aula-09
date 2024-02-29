function logar() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;

    if (nome == "daniel" && senha == "12345") {
        alert("acesso garantido");
        location.href = ("./pages/teste.html");
    } else {
        alert("acesso negado");
    }


}