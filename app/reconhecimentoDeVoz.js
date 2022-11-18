const elementoChute = document.getElementById('chute');


// SUPORTE DO CHROME
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    var chute = e.results[0] [0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido (chute)
    }

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () =>recognition.start());

