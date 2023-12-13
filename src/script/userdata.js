let usuariologado = document.getElementById("usuariologado")
let enviarpara = document.getElementById("enviarpara")
let usuarioendereco = document.getElementById("usuarioendereco")

    // usuariologado.innerHTML = `<span class="material-symbols-outlined">
    // manage_accounts
    // </span>${usuarioCorrente.nome}`

//Puxa dados do sessionStorage da conta logada
let logado = JSON.parse(sessionStorage.getItem('contaLogada'));

var primeiroNome = logado.nome;
enviarpara.innerHTML = `Enviar para ${primeiroNome}`
usuarioendereco.innerHTML = `${usuarioCorrente.endereco}`

if (usuarioCorrente.login != "admin") {

    // var minhaconta = document.getElementById("minhaconta")
    // minhaconta.href = "usuarios.html"

    //document.getElementById('menu_usuarios').style.display = "none";

}

//document.getElementById('usuario_login').innerHTML = `${usuarioCorrente.login}`
//document.getElementById('usuario_nome').innerHTML = `${usuarioCorrente.nome}`
//document.getElementById('usuario_email').innerHTML = `${usuarioCorrente.email}`
document.getElementById('usuarioendereco').innerHTML = `${logado.endereco.logradouro}, ${logado.endereco.numero}`


