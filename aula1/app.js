let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}



/*github e o repositorio e o git é quem faz a comunicação entre o github e o notebook para salvar o código na
nuvem 
----> comandos : 
* git init : serve para iniciar a comunicação do git com o github e salvar o código
* git add nomeDoArquivo.md : para adicionar um arquivo para o repositorio OBS : pode usar o atalho git add . 
para adicionar todos os arquivos do diretorio no qual você se encontra no terminal
* git commit -m "comentario" : para adicionar um comentario
* git branch -M main : use para nomear uma branch ou renomea-la
* git remote add origin urlDoGitHub : use para o git saber para qual repositorio o código deve ir
* git push -u origin main : use para enviar a branch para para o repositorio

resumindo um pouco o git remote é quem faz o link entre o repositorio e o git local
ele tem algumas varioções :
* git remote add : adiciona um repositorio remoto
EX git remote add apelido url : o apelido é tipo o origin no código a cima

* git remote -v : listar os repositórios remotos ou seja e para saber onde o código esta sendo salvo

* git remote remove apelido : use para desconectar um repositorio remoto do seu projeto local

* git remote set-url apelido nova_url : para alterar a url de um repositorio remoto

* git remote rename apelido novo_apelido : use para dar um novo apelido para o repositorio

para clonar um código você precisa ter o link do código no github e no repositorio vá para o botão code
e logo em seguida na área clone copie a url e no explorador de arquivos vá na área de trabalho e aperte 
o botão direito e abra o terminal do windons depois coloque um seguinte código:

* git clone url 

após a execusão do comando vai aparecer a pasta do projeto no seu dispositivo

para saber onde foi modificado o código use o código git status para ver os arquivos modificados

se por algum acaso você quiser mudar o código principal use o comando:

git add .

para que todas as modificações que você fez sejam salvos no código do repositorio */



