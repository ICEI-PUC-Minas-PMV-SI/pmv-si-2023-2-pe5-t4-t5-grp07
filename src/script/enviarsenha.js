function enviarsenha() {
    var dataenvio = new Date()
    var email = window.document.getElementById("inputEmail3").value
    var lista_emails = JSON.parse(localStorage.getItem('lista-emails') || '[]');
    if (email === "") {
        alert("Preencha o e-mail");
    }
    else {
        lista_emails.push({
            dataenvio: dataenvio,
            email: email
        });

        localStorage.setItem("lista-emails", JSON.stringify(lista_emails));
        alert(`Senha enviada para email ${email}`);
    }
}