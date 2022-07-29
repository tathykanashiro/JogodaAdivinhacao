const usuarioNumeroElemento = document.querySelector('#usuarioNumero'),
    botaoEnvio = document.querySelector('#enviaBotao'),
    reiniciaBotao = document.querySelector('#reiniciaBotao'),
    minimoNumeroElemento = document.querySelector('#minNumero'),maximoNumeroElemento = document.querySelector('#maxNumero'),
    dicaElemento = document.querySelector('#dica'),
    adivinRestanteElemento = document.querySelector('#adivinRestante');

usuarioNumeroElemento.addEventListener('input', handleNumberInput);
botaoEnvio.addEventListener('click', adivinhaNumero);
reiniciaBotao.addEventListener('click', start);

const minNumero = 0,
      maxNumero = 10,
      totalAdivinha = 3;

let numeroAtual,
    numeroUsuario,
    adivinRestante;

function start(){
    numeroAtual = geraNumero();
    numeroUsuario = minNumero;
    adivinRestante = totalAdivinha;

    usuarioNumeroElemento.value = numeroUsuario;
    minimoNumeroElemento.innerText = minNumero;
    maximoNumeroElemento.innerText = maxNumero;

    dicaElemento.innerText = '';
    adivinRestanteElemento.innerText = adivinRestante;

    usuarioNumeroElemento.classList.remove('esconder');
    enviaBotao.classList.remove('esconder');
    reiniciaBotao.classList.add('esconder');

}

function geraNumero(){
    return Math.floor(Math.random() * (maxNumero + 1 - minNumero)) + minNumero
}

function handleNumberInput(event){
    let value = parseInt(event.target.value || numeroUsuario || 0);
    value = handleMinMax(minNumero, value, maxNumero);
    usuarioNumero = value;
    event.target.value = value;
}

function handleMinMax(min, number, max){
    return Math.min(Math.max(number, min), max);
}

function adivinhaNumero(){
    adivinRestante--;
    adivinRestanteElemento.innerText = adivinRestante;
    if(numeroAtual === usuarioNumero){
        dicaElemento.innerText = `Acertou! O número é ${numeroAtual}`;
        gameOver();
    } else {
        if(adivinRestante > 0){
            dicaElemento.innerText = `O número é ${numeroAtual < usuarioNumero ? 'menor': 'maior'}`;
        } else{
            dicaElemento.innerText = `Acabaram suas tentativas! O número certo era ${numeroAtual}`;
            gameOver();
        }
    }
}

function gameOver(){
    usuarioNumeroElemento.classList.add('esconder');
    enviaBotao.classList.add('esconder');
    reiniciaBotao.classList.add('esconder');
}

start();

