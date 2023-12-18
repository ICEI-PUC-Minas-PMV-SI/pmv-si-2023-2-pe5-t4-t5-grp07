function start() {
  let jaStartado = false;

  if (localStorage.length > 0){
    for (i=0; i<localStorage.length; i++) {
      let chave = localStorage.key(i);
      
      if (chave !== 'listaDeContas') {
        localStorage.removeItem(chave);
      } else if(chave === 'listaDeContas') {
        jaStartado = true;
      }
    }
  }

  if (jaStartado === false) {
    localStorage.setItem("listaDeContas", "[]");
    popularContas();
  }

  return document.getElementById('botao').innerHTML = '<a id="botao" href="login.html" style="background-color: #6BD489; text-decoration: none; color: black; padding: 10px; border-radius: 15px;">Prosseguir</a>';
}

function popularContas() {
  let listaEmTexto = localStorage.getItem('listaDeContas');
  let listaDeContas = JSON.parse(listaEmTexto);
  let req = new XMLHttpRequest();
  let url = 'https://randomuser.me/api/?results=10&nat=br&exc=registered,phone,cell,id,picture';
  let resultadoTexto;
  let resultado;
  let objeto;
  
  req.open('GET', url, false);
  req.send('');

  resultadoTexto = req.responseText;
  resultado = JSON.parse(resultadoTexto);

  for (i=0; i<resultado.results.length; i++){
    let genIng;
    let genero;

    objeto = resultado.results[i];

    genIng = objeto.gender;
    switch (genIng) {
      case 'male':
        genero = 'Masculino';
        break;
      case 'female':
        genero = 'Feminino';
        break;
    }

    conta = {
      id: listaDeContas.length, 
      email: objeto.email,
      nome: objeto.name.first.charAt(0).toUpperCase()+objeto.name.first.slice(1),
      sobrenome: objeto.name.last.charAt(0).toUpperCase()+objeto.name.last.slice(1),
      data: objeto.dob.date.slice(0,9),
      gênero: genero,
      senha: objeto.login.salt,
      endereco: {
        logradouro: objeto.location.street.name,
        numero: objeto.location.street.number,
        complemento: '',
        bairro: 'Bairro',
        cidade: objeto.location.city,
        estado: objeto.location.state,
      },
      fav1: 'Mercado 1',
      fav2: 'Mercado 2',
      fav3: 'Mercado 3'
    };

    listaDeContas.push(conta);
  }

  listaEmTexto = JSON.stringify(listaDeContas);

  localStorage.setItem('listaDeContas', listaEmTexto);
}

function mudarMenu(escolha) {
  let conteudo = document.getElementById('preenchimento');
  let menu = document.getElementById('menuCaixa'+escolha);
  let conta = JSON.parse(sessionStorage.getItem('contaLogada'));
  let data = conta.data.slice(8) + '/' + conta.data.slice(5,7) + '/' + conta.data.slice(0,4);
  let endereco;

  if (conta.endereco.complemento == ""){
    endereco = conta.endereco.logradouro+', '+conta.endereco.numero+', '+conta.endereco.bairro+', '+conta.endereco.cidade+', '+conta.endereco.estado;
  } else {
    endereco = conta.endereco.logradouro+', '+conta.endereco.numero+', '+conta.endereco.complemento+', '+conta.endereco.bairro+', '+conta.endereco.cidade+', '+conta.endereco.estado;
  };

  switch (escolha) {
    case 'Info':
      conteudo.innerHTML = '<main class="mainConfigConta" id="info"><div class="container3Colunas"><p>Nome:</p><p id="valorNome">Lorem ipsum dolor sit.</p></div><hr><div class="container3Colunas" id="data"><p>Data de Nascimento:</p><p id="valorData">Lorem ipsum dolor sit.</p></div><hr><div class="container3Colunas"><p>Gênero:</p><p id="valorGenero">Lorem ipsum dolor sit.</p></div><hr><div class="container3Colunas"><p>Endereço:</p><p id="valorEndereco">Lorem ipsum dolor sit.</p></div><hr><button onclick="mudarMenu(`infoEdit`)"><p>Editar</p></button></main>';
      document.getElementById('valorNome').innerHTML = conta.nome + ' ' + conta.sobrenome;
      document.getElementById('valorData').innerHTML = data;
      limpaCorMenu();
      document.getElementById('valorGenero').innerHTML = conta.gênero;
      document.getElementById('valorEndereco').innerHTML = endereco;
      menu.style.backgroundColor = '#6BD489';
      break;
    case 'Sec':
      conteudo.innerHTML = '<main class="mainConfigConta" id="sec"><div class="container3Colunas"><p>E-mail:</p><p id="valorEmail">Lorem ipsum dolor sit.</p></div><hr><div class="container3Colunas" id="parteSenha"><p>Senha:</p><p>**********</p><button onclick="mudarMenu(`secEdit`)"><p>Trocar Senha</p></button></div><hr></main>';
      limpaCorMenu();
      document.getElementById('valorEmail').innerHTML = conta.email;
      menu.style.backgroundColor = '#6BD489';
      break;
    case 'Fav':
      conteudo.innerHTML = '<main class="mainConfigConta" id="fav"><div class="container3Colunas" id="caixaFav"><p>Favoritos:</p><ul id="listaFav"><li><p id="mercadoFav1">Lorem ipsum dolor sit amet.</p></li><li><p id="mercadoFav2">Lorem ipsum dolor sit amet.</p></li><li><p id="mercadoFav3">Lorem ipsum dolor sit amet.</p></li></ul></div><hr><button onclick="mudarMenu(`favEdit`)"><p>Editar</p></button></main>';
      document.getElementById('mercadoFav1').innerHTML = conta.fav1;
      document.getElementById('mercadoFav2').innerHTML = conta.fav2;
      document.getElementById('mercadoFav3').innerHTML = conta.fav3;
      limpaCorMenu();
      menu.style.backgroundColor = '#6BD489';
      break;
    case 'Del':
      conteudo.innerHTML = '<main class="mainConfigConta" id="del"><div class="container2Linhas"><p>Digite "Desejo excluir a minha conta" para confirmar e excluir a conta</p><div class="caixaCinza"><input id="confirmDeleteConta" type="text" class="inputEdit"></div></div><hr><button onclick="editConta(`Del`)"><p>Excluir</p></button></main>';
      limpaCorMenu();
      menu.style.backgroundColor = '#6BD489';
      break;
    case 'infoEdit' :
      conteudo.innerHTML = '<main class="mainConfigConta" id="infoEdit"><div id="editNomeCompleto"; class="container3Colunas"><p>Nome:</p><div class="caixaCinza"><input id="mudarNome" class="inputEdit" type="text" placeholder="Nome"></div><div class="caixaCinza"><input id="mudarSobrenome" class="inputEdit" type="text" placeholder="Sobrenome"></div></div><hr><div class="container3Colunas" id="enderEdit"><p>Endereço:</p><div class="parteEnder"><p>Logradouro:</p><div class="caixaCinza"><input id="mudarLogradouro" class="inputEdit" type="text" placeholder="Rua A"></div></div><div class="parteEnder"><p>Número:</p><div class="caixaCinza"><input id="mudarNumero" class="inputEdit" type="text" placeholder="1000"></div></div><div class="parteEnder"><p>Complemento:</p><div class="caixaCinza"><input id="mudarComplemento" class="inputEdit" type="text" placeholder="Complemento"></div></div><div class="parteEnder"><p>Bairro:</p><div class="caixaCinza"><input id="mudarBairro" class="inputEdit" type="text" placeholder="Bairro"></div></div><div class="parteEnder"><p>Cidade:</p><div class="caixaCinza"><input id="mudarCidade" class="inputEdit" type="text" placeholder="Cidade"></div></div><div class="parteEnder"><p>Estado:</p><div class="caixaCinza"><input id="mudarEstado" class="inputEdit" type="text" placeholder="Estado"></div></div></div><hr><button onclick="editConta(`Info`)"><p>Salvar</p></button></main>';
      document.getElementById('mudarNome').placeholder = conta.nome;
      document.getElementById('mudarSobrenome').placeholder = conta.sobrenome;
      document.getElementById('mudarLogradouro').placeholder = conta.endereco.logradouro;
      document.getElementById('mudarNumero').placeholder = conta.endereco.numero;
      document.getElementById('mudarComplemento').placeholder = conta.endereco.complemento;
      document.getElementById('mudarBairro').placeholder = conta.endereco.bairro;
      document.getElementById('mudarCidade').placeholder = conta.endereco.cidade;
      document.getElementById('mudarEstado').placeholder = conta.endereco.estado;
      break;
    case 'secEdit' :
      conteudo.innerHTML = '<main class="mainConfigConta" id="secEdit"><div class="container3Colunas"><p>E-mail:</p><p id="valorEmail">Lorem ipsum dolor sit.</p></div><hr><div class="container3Colunas"><p>Senha:</p><div id="caixaSenha"><div class="caixaCinza" id="senhaAntiga"><input id="mudarSenhaAntiga" type="password" class="inputEdit" placeholder="Senha Antiga"></div><div class="caixaCinza" id="senhaNova"><input id="mudarSenhaNova" type="password" class="inputEdit" placeholder="Nova Senha"></div><div class="caixaCinza" id="senhaRepete"><input id="mudarSenhaNovaRepete" type="password" class="inputEdit" placeholder="Repita a Nova Senha"></div><button onclick="editConta(`Sec`)" id="trocaSenha"><p>Salvar</p></button></div></div><hr></main>';
      document.getElementById('valorEmail').innerHTML = conta.email;
      break;
    case 'favEdit' :
      conteudo.innerHTML = '<main class="mainConfigConta" id="favEdit"><div class="container3Colunas" id="caixaFav"><p>Favoritos:</p><ul id="listaFav"><li><select name="mercados" id="listaMercadosOp1"><option id="mercadoFav1" value="Mercado 1" disabled selected>Opção 1</option><option value="Mercado 1 Unidade 1"><p>Mercado 1 Unidade 1</p></option><option value="Mercado 1 Unidade 2"><p>Mercado 1 Unidade 2</p></option><option value="Mercado 2 Unidade 1"><p>Mercado 2 Unidade 1</p></option><option value="Mercado 2 Unidade 2"><p>Mercado 2 Unidade 2</p></option><option value="Mercado 3 Unidade 1"><p>Mercado 3 Unidade 1</p></option><option value="Mercado 3 Unidade 2"><p>Mercado 3 Unidade 2</p></option></select></li><li><select name="mercados" id="listaMercadosOp2"><option id="mercadoFav2" value="Mercado 2" disabled selected>Opção 1</option><option value="Mercado 1 Unidade 1"><p>Mercado 1 Unidade 1</p></option><option value="Mercado 1 Unidade 2"><p>Mercado 1 Unidade 2</p></option><option value="Mercado 2 Unidade 1"><p>Mercado 2 Unidade 1</p></option><option value="Mercado 2 Unidade 2"><p>Mercado 2 Unidade 2</p></option><option value="Mercado 3 Unidade 1"><p>Mercado 3 Unidade 1</p></option><option value="Mercado 3 Unidade 2"><p>Mercado 3 Unidade 2</p></option></select></li><li><select name="mercados" id="listaMercadosOp3"><option id="mercadoFav3" value="Mercado 3" disabled selected>Opção 1</option><option value="Mercado 1 Unidade 1"><p>Mercado 1 Unidade 1</p></option><option value="Mercado 1 Unidade 2"><p>Mercado 1 Unidade 2</p></option><option value="Mercado 2 Unidade 1"><p>Mercado 2 Unidade 1</p></option><option value="Mercado 2 Unidade 2"><p>Mercado 2 Unidade 2</p></option><option value="Mercado 3 Unidade 1"><p>Mercado 3 Unidade 1</p></option><option value="Mercado 3 Unidade 2"><p>Mercado 3 Unidade 2</p></option></select></li></ul></div><hr><button onclick="editConta(`Fav`)"><p>Salvar</p></button></main>';
      document.getElementById('mercadoFav1').text = conta.fav1;
      document.getElementById('mercadoFav2').text = conta.fav2;
      document.getElementById('mercadoFav3').text = conta.fav3;
      break;
  }
};

function limpaCorMenu() {
  document.getElementById('menuCaixaInfo').style.backgroundColor = '#fff';
  document.getElementById('menuCaixaSec').style.backgroundColor = '#fff';
  document.getElementById('menuCaixaFav').style.backgroundColor = '#fff';
  document.getElementById('menuCaixaDel').style.backgroundColor = '#fff';
};

function criarConta() {
  let listaDeContas = JSON.parse(localStorage.getItem('listaDeContas'));
  let objeto ;
  let vEmail = document.getElementById('vEmail').value;
  let vNome = document.getElementById('vNome').value;
  let vSobrenome = document.getElementById('vSobrenome').value;
  let vData = document.getElementById('vData').value;
  let vGenero = 'Não Informado';
  let senha = document.getElementById('senha1').value;
  let repSenha = document.getElementById('senha2').value;
  let genero = document.getElementsByName('genero');
  let vSenha;

  for (i=0; i< genero.length; i++) {
    if (genero[i].checked) {
      vGenero = genero[i].value;
      switch (vGenero) {
        case 'masculino':
          vGenero = 'Masculino';
          break;
        case 'feminino' :
          vGenero = 'Feminino';
          break;
        case 'naoBin':
          vGenero = 'Não Binário';
          break;
      }
    }
  }

  if (senha == repSenha) {
    vSenha = senha;
  } else {
    vSenha = false;
  }

  objeto = {
    id: listaDeContas.length, 
    email: vEmail,
    nome: vNome,
    sobrenome: vSobrenome,
    data: vData,
    gênero: vGenero,
    senha: vSenha,
    endereco: {
      logradouro: 'Rua',
      numero: 'Número',
      complemento: 'Complemento',
      bairro: 'Bairro',
      cidade: 'Cidade',
      estado: 'Estado',
    },
    fav1: 'Mercado 1',
    fav2: 'Mercado 2',
    fav3: 'Mercado 3'
  };

  for (i=0; i<listaDeContas.length; i++) {
    let temp = listaDeContas[i];

    if (objeto.email == temp.email) {
      return alert('Email já cadastrado.');
    }
  }

  if (vSenha === false) {
    return alert('Senhas não correspondem');
  }

  if (objeto.email === '' || objeto.data === '' || objeto.nome === '' || objeto.sobrenome === '' || objeto.gênero === 'Não Informado' || objeto.senha === '') {
    return alert('Preencha todos os campos.');
  }

  listaDeContas.push(objeto);
  localStorage.setItem('listaDeContas', JSON.stringify( listaDeContas));

  sessionStorage.setItem('contaLogada', JSON.stringify(objeto));
  
  criarCarrinho();

  return window.location.href = 'login.html';
};

function login() {
  let listaDeContas = JSON.parse(localStorage.getItem('listaDeContas'));
  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;
  
  for (i=0; i<listaDeContas.length; i++) {
    if (email === listaDeContas[i].email) {
      if (senha === listaDeContas[i].senha) {
        sessionStorage.setItem('contaLogada',JSON.stringify(listaDeContas[i]));

        criarCarrinho();

        return window.location.href = 'index.html';
      }
    }
  }

  alert('E-mail não cadastrado, ou senha inválida.')
}

function editConta(parte) {
  let novoObjeto = JSON.parse(sessionStorage.getItem('contaLogada'));
  let objetoSession = JSON.parse(sessionStorage.getItem('contaLogada'));
  let listaDeContas = JSON.parse(localStorage.getItem('listaDeContas'));

  switch (parte) {
    case 'Info' :
      let novoNome = document.getElementById('mudarNome').value;
      let novoSobrenome = document.getElementById('mudarSobrenome').value;
      let novoLogradouro = document.getElementById('mudarLogradouro').value;
      let novoNumero = document.getElementById('mudarNumero').value;
      let novoComplemento = document.getElementById('mudarComplemento').value;
      let novoBairro = document.getElementById('mudarBairro').value;
      let novoCidade = document.getElementById('mudarCidade').value;
      let novoEstado = document.getElementById('mudarEstado').value;

      if(novoNome != novoObjeto.nome && novoNome != ''){
        novoObjeto.nome = novoNome;
      }
      if(novoSobrenome != novoObjeto.sobrenome && novoSobrenome != ''){
        novoObjeto.sobrenome = novoSobrenome;
      }
      if(novoLogradouro != novoObjeto.endereco.logradouro && novoLogradouro != ''){
        novoObjeto.endereco.logradouro = novoLogradouro;
      }
      if(novoNumero != novoObjeto.endereco.numero && novoNumero != ''){
        novoObjeto.endereco.numero = novoNumero;
      }
      if(novoComplemento != novoObjeto.endereco.complemento){
        novoObjeto.endereco.complemento = novoComplemento;
      }
      if(novoBairro != novoObjeto.endereco.bairro && novoBairro != ''){
        novoObjeto.endereco.bairro = novoBairro;
      }
      if(novoCidade != novoObjeto.endereco.cidade && novoCidade != ''){
        novoObjeto.endereco.cidade = novoCidade;
      }
      if(novoEstado != novoObjeto.endereco.estado && novoEstado != ''){
        novoObjeto.endereco.estado = novoEstado;
      }
      break;
    case 'Sec' :
      let senhaAntiga = document.getElementById('mudarSenhaAntiga').value;
      let senhaNova = document.getElementById('mudarSenhaNova').value;
      let senhaNovaRepete = document.getElementById('mudarSenhaNovaRepete').value;

      if (senhaAntiga == novoObjeto.senha){
        if(senhaNova == senhaNovaRepete && senhaNova != ''){
          novoObjeto.senha = senhaNova;
        } else {
          return alert('Repita ou preencha a senha nova corretamente.')
        }
      } else {
        return alert('Senha Incorreta')
      };
      break;
    case 'Fav' :
      let mercado1 = document.getElementById('listaMercadosOp1').value;
      let mercado2 = document.getElementById('listaMercadosOp2').value;
      let mercado3 = document.getElementById('listaMercadosOp3').value;

      novoObjeto.fav1 = mercado1;
      novoObjeto.fav2 = mercado2;
      novoObjeto.fav3 = mercado3;
      break;
    case 'Del' :
      let outros;
      let escrito = document.getElementById('confirmDeleteConta').value.toLowerCase();
      let valor = 'desejo excluir a minha conta';

      if (escrito === valor) {
        listaDeContas.splice(novoObjeto.id,1);

        for (i=novoObjeto.id; i<listaDeContas.length;i++){
          outros = listaDeContas[i];
          outros.id = outros.id - 1;
        }

        localStorage.setItem('listaDeContas', JSON.stringify(listaDeContas));
        sessionStorage.removeItem('contaLogada');

        return window.location.href = "login.html";
      } else {
        alert('Digite a frase de confirmação.');
      }
  }

  if (novoObjeto != objetoSession) {
    sessionStorage.setItem('contaLogada', JSON.stringify(novoObjeto) );

    listaDeContas[novoObjeto.id] = novoObjeto;
    localStorage.setItem('listaDeContas', JSON.stringify(listaDeContas));
  }
  
  return mudarMenu(parte);
}

function carregarEndereco() {
  let conta = JSON.parse(sessionStorage.getItem('contaLogada'));

  document.getElementById('carregarEndereco').innerHTML = conta.endereco.logradouro;
}

function deslogar() {
  sessionStorage.removeItem('contaLogada');
  sessionStorage.removeItem('carrinho');
  return window.location.href = 'login.html';
}

function pagLogin(parametro) {
  switch (parametro){
    case 'esqueci':
      document.getElementById('containerLogin').innerHTML = `<div id="recuperar">
        <div class="form">
          <label for="email">Insira seu e-mail para recuperar sua senha.</label>
          <input id="recuperarEmail" type="email" placeholder="E-mail" name="email" required>
          <a onclick="recuperar()" id="entrar">Enviar</a>
        </div>
      </div>`;
      break;
    case 'criar':
      document.getElementById('containerLogin').innerHTML = `<div id="criandoConta">
        <div class="form">
          <div id="l01">
            <label for="email">Email:</label>
            <label for="dataNasc">Nascimento:</label>
          </div>
          <div id="l02">
            <input id="vEmail"type="email"placeholder="E-mail" name="email"required>
            <input id="vData" type="date"name="dataNasc" required>
          </div>
          <div id="l03">
            <label for="nome">Nome:</label>
            <label for="sobrenome">Sobrenome:</label>
          </div>
          <div id="l04">
            <input id="vNome" type="text" name="nome"required>
            <input id="vSobrenome" type="text"name="sobrenome" required>
          </div>
          <div id="l05">
            <label for="genero">Gênero:</label>
            <input id="masculino"type="radio"name="genero"value="masculino" required>
            <label for="masculino">Masculino</label>
            <input id="feminino"type="radio"name="genero"value="feminino">
            <label for="feminino">Feminino</label>
            <input id="naoBin" type="radio"name="genero"value="naoBin">
            <label for="naoBin">Não Binário</label>  
          </div>
          <div id="l06">
              <label for="senha">Senha:</label>
          </div>
          <div id="l07">
            <input id="senha1"type="password"placeholder="Senha" name="senha"minlength="8"  required>
            <input id="senha2" type="password"placeholder="Repita a senha"name="repetirSenha" required>
          </div>
          <div id="l08">
            <button onclick="pagLogin()">Já Tenho conta</button>
            <button onclick="criarConta()">Criar Conta</button>
          </div>
        </div>
      </div>`;
      break;
    default:
      document.getElementById('containerLogin').innerHTML = `<div id="login">
        <div class="form">
          <input id="email" type="email" placeholder="E-mail" name="email" required>
          <input id="senha" type="password" placeholder="Senha" name="senha" required>
          <a onclick="pagLogin('esqueci')" id="esqueci">Esqueci a Senha</a>
          <a onclick="pagLogin('criar')" id="criar">Criar Conta</a>
          <button onclick="login()" id="entrar">Sign In</button>
        </div>
      </div>`;
      break;
  }
}

function recuperar() {
  alert('E-mail de recuperação enviado para: '+document.getElementById('recuperarEmail').value);
  return pagLogin();
}

function criarCarrinho(){
  let carrinho = {};

        for (i = 0; i < db_produtos.dados.length; i++) {
          let item = {codigo:db_produtos.dados[i].codigo,qtd:0};

            carrinho[i] = item;
        }

        sessionStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregarProdutos(){
  let lProdutos = '';
  let n = 0;
  let carrinho = JSON.parse(sessionStorage.getItem('carrinho'));

  for(i=0; i<Object.keys(carrinho).length; i++){
    if(carrinho[i].qtd > 0){
      if(n % 2 === 0){
        lProdutos += `
        <div class="produto-carrinho par">
          <img src="${db_produtos.dados[i].imagem}">
          <p>${db_produtos.dados[i].descricao}</p>
          <p>Qtd.: ${carrinho[i].qtd}</p>
        </div>`;
      } else {
        lProdutos += `
        <div class="produto-carrinho impar">
          <img src="${db_produtos.dados[i].imagem}">
          <p>${db_produtos.dados[i].descricao}</p>
          <p>Qtd.: ${carrinho[i].qtd}</p>
        </div>`;
      }
      n++;
    };
  };

  return document.getElementById('listaitens').innerHTML = lProdutos;
}

function carregarMercados() {
  let lMercados = '';
  let carrinho = JSON.parse(sessionStorage.getItem('carrinho'));
  let soma1 = 0;
  let soma2 = 0;
  let soma3 = 0;
  let soma = [];

  for(i=0; i<Object.keys(carrinho).length; i++){
    soma1 += parseInt(carrinho[i].qtd) * db_produtos.dados[i].preco[0].supermercado1;
  }

  for(i=0; i<Object.keys(carrinho).length; i++){
    soma2 += parseInt(carrinho[i].qtd) * db_produtos.dados[i].preco[0].supermercado2;
  }

  for(i=0; i<Object.keys(carrinho).length; i++){
    soma3 += parseInt(carrinho[i].qtd) * db_produtos.dados[i].preco[0].supermercado3;
  }

  soma.push(soma1.toFixed(2));
  soma.push(soma2.toFixed(2));
  soma.push(soma3.toFixed(2));
  console.log(soma);

  for(i=0; i<3; i++){
    lMercados += `
    <div class="mercados">
      <div class="carrinho-mercado">
        <p id="nomemercado"><strong>${db_mercados.dados[i].mercado}</strong></p>
        <img src="${db_mercados.dados[i].imagem}" alt="">
      </div>
      <div class="carrinho-preco">
        <p>Subtotal: </p>
        <p>R$ ${soma[i]}</p>
      </div>
      <div class="carrinho-preco">
        <p>Frete:</p>
        <p>R$ 20.00 </p>
      </div>
      <div class="carrinho-preco">
        <p>Total:</p>
        <p>R$ ${parseFloat(soma[i]) + 20.00}</p>
      </div>
      <button type="submit" class="pagamento btn btn-primary">Ir para pagamento</button>
    </div>`;
  }

  return document.getElementById('listamercados').innerHTML = lMercados;
}