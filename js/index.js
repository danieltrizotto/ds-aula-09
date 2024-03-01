function logar() {
    var nome = document.getElementById("nome").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var enviar = document.getElementById("entrar");

    if (nome === "daniel" && senha === "12345") {
        alert("Acesso garantido");
        location.href = "./pages/teste.html";
    } else {
        alert("Acesso negado");
    }


    if (nome === "" || senha === "") {
        alert("Preencha as informações");
    }


}