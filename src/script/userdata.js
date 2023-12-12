let usuariologado = document.getElementById("usuariologado")
let enviarpara = document.getElementById("enviarpara")
let usuarioendereco = document.getElementById("usuarioendereco")

usuariologado.innerHTML = `<span class="material-symbols-outlined">
manage_accounts
</span>${usuarioCorrente.nome}`
enviarpara.innerHTML = `Enviar para ${usuarioCorrente.nome}`
usuarioendereco.innerHTML = `${usuarioCorrente.endereco}`

if (usuarioCorrente.login != "admin") {

    // var minhaconta = document.getElementById("minhaconta")
    // minhaconta.href = "usuarios.html"

    document.getElementById('menu_usuarios').style.display = "none";

}

document.getElementById('usuario_login').innerHTML = `${usuarioCorrente.login}`
document.getElementById('usuario_nome').innerHTML = `${usuarioCorrente.nome}`
document.getElementById('usuario_email').innerHTML = `${usuarioCorrente.email}`
document.getElementById('usuario_endereco').innerHTML = `${usuarioCorrente.endereco}`


