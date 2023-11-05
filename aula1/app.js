let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
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

para que todas as modificações que você fez sejam salvos no código do repositorio

e sempre bom fazer commitis para falar o que foi alterado no códico

use git log para saber o que foi comentado e o que foi modificado

commitis devem ser não muito pequenos mas também nõa tão longos para não ficar muito confuso na hora de 
entender o que foi alterado 

lembre-se de nunca realisar um commit em um código com bugs somente com código funcional

se você não saber para onde o código está indo use o comando git remote e ele vai te dar o apelido do
repositório 

se você for adicionar mudanças em um código que não é seu ou alguem tentar fazer mudanças no seu 
em ambos os casos a pessoa que criou o repositório precisa dar permição para você ser um colaborador do código
pra realmente fazer uma alteração do código

OBS: os comandos realizados acima não mudarão o codigo do repositório

quando voçê for tentar adicionar alguem como colaborador funcionara como seguir alguem no instagram ou seja
ela precisa te 'seguir de volta' para poder realmente um colaborador

após ser autorizado pode executar o comando:

git push apelidoDoRepositório nomeDaBranch

se a mudanças for feita por mais de um autor coloque o commit da seguinte maneira:

git commit -m "comentario sobre a mudança.
>
>
Co-authored-by: Nome <emailDoCabrom>
Co-authred-by: Outro-Nome <outroemailDoCabromQueAjudou>


se você quiser fazer uma contribuisão de um código precisa ser em um projeto de código aberto e para
colaborar você precisa escolher uma das issues disponiveis no código
para fazer um uma copia do repositório em sua conta (também conhecido como fork) para poder realizar a mudança para solucionar
a issue

por fim para enviar a solução você precisa abrir uma pull request que é enviar as mudanças feitas no 
código para o dono do código e passara por uma revisão e talves ela pode ser aceita e caso ele for 
aceito ele começara a fazer parte do código fonte. Também é bom saber as regras de contribuição do 
repositório


para realizar uma atualização do codigo para ver as alterações utilize o código:

* git pull apelidoDoRepositorio nomeDaBranch


cara é muito mais facíl utilizar o ctrl + alt + G para usar as atulizações que o proprio vscode disponibiliza
por que assim não precisa usar esse tanto de código*/




