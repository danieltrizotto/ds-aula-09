function logar() {
    var nome = document.getElementById("nome").value.trim();//valores sem espaço em branco
    var senha = document.getElementById("senha").value.trim();//valores sem espaço em branco


    if (nome === "daniel" && senha === "12345") {
        alert("Acesso garantido");
        location.href = "./pages/teste.html";
    } else {
        alert("Acesso negado");
    }


    if (nome === "" || senha === "") {//caso algo esteja em branco
        alert("Preencha as informações");
    }


}