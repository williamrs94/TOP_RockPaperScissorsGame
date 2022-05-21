let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
const pontuacaoUsuario_span = document.getElementById("pontuacao-usuario");
const pontuacaoComputador_span = document.getElementById("pontuacao-computador");
const pontuacaoQuadro_div = document.querySelector(".quadro-pontuacao");
const resultado_p = document.querySelector(".resultado > p");
const pedra_div = document.getElementById("pe");
const papel_div = document.getElementById("pa");
const tesoura_div = document.getElementById("te");


function pegarEscolhaPc() {
    let escolhas = ['pe', 'pa', 'te'];
    let numeroAleatorio = Math.floor(Math.random() * 3);
    return escolhas[numeroAleatorio];
}

function converterPalavra(letra) {
    if (letra === "pe") return "Pedra";
    if (letra === "pa") return "Papel";
    return "Tesoura";
}

function vitoria(escolhaUsuario, escolhaComputador) {
    let escolhaUsuario_div = document.getElementById(escolhaUsuario);
    pontuacaoUsuario++;
    pontuacaoUsuario_span.innerHTML = pontuacaoUsuario;
    pontuacaoComputador_span.innerHTML = pontuacaoComputador;
    resultado_p.innerHTML = `${converterPalavra(escolhaUsuario)} vence ${converterPalavra(escolhaComputador)}. Você ganhou!`;
    escolhaUsuario_div.classList.add('green-glow');
    setTimeout(() => escolhaUsuario_div.classList.remove('green-glow'), 500);
}



function perda(escolhaUsuario, escolhaComputador) {
    let escolhaUsuario_div = document.getElementById(escolhaUsuario);
    pontuacaoComputador++;
    pontuacaoUsuario_span.innerHTML = pontuacaoUsuario;
    pontuacaoComputador_span.innerHTML = pontuacaoComputador;
    resultado_p.innerHTML = `${converterPalavra(escolhaUsuario)} perde para ${converterPalavra(escolhaComputador)}. Você perdeu!`;
    escolhaUsuario_div.classList.add('red-glow');
    setTimeout(() => escolhaUsuario_div.classList.remove('red-glow'), 500);
}

function empate(escolhaUsuario, escolhaComputador) {
    resultado_p.innerHTML = `${converterPalavra(escolhaUsuario)} é igual a ${converterPalavra(escolhaComputador)}. Empate!`;
    let escolhaUsuario_div = document.getElementById(escolhaUsuario);
    escolhaUsuario_div.classList.add('gray-glow');
    setTimeout(() => escolhaUsuario_div.classList.remove('gray-glow'), 500);
}


function jogo(escolhaUsuario) {
    let escolhaComputador = pegarEscolhaPc();
    switch (escolhaUsuario + escolhaComputador) {
        case "pete": /* usuário ganha */
        case "pape":
        case "tepa":
            vitoria(escolhaUsuario, escolhaComputador);
            break;
        case "pepa": /* usuário perde */
        case "pate":
        case "tepe":
            perda(escolhaUsuario, escolhaComputador);
            break;
        case "pepe":
        case "papa":
        case "tete":
            empate(escolhaUsuario, escolhaComputador);
            break;
    }
}



function principal(){
    pedra_div.addEventListener('click', () => jogo("pe"));

    papel_div.addEventListener('click', () => jogo("pa"));

    tesoura_div.addEventListener('click', () => jogo("te"));
}

principal();