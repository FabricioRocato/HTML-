var receber_novidades = document.getElementById("receber_novidades");

receber_novidades.addEventListener("click", function () {


    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var autorizo_conta = document.getElementById("autorizo_conta").checked;
    console.log(nome);
    console.log(email);
    console.log(autorizo_conta);

    if (!nome || !nome.tostring().trim()) {
        alert("informe o nome, por favor.");
        return;
    }

    if (!email || !email.tostring().trim()) {
        alert("informe seu e-mail, por favor.");
        return;
    }
    if (!autorizo_conta) {
        alert("autorize, por favor.");
        return;
    }




});