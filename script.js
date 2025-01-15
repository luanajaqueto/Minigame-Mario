const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Através do getComputedStyle adiciona o elemento que se quer saber e é possível pegar qualquer propriedade CSS do elemento. 
    
    // Com o replace haverá 2 parâmetros, o que se quer modificar e o que entrará no lugar desse elemnto

    // Quando se está recebendo as informações (com números) com Strings e quer alterar para números, se coloca o "+"" na frente EX: +window.getComputedStyle. Nesse caso ele colocou o replace para tirar o px que estava vindo junto e deixar apenas o número, porque assim não haverá problema de conversão

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png'
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        
    }

}, 10);

document.addEventListener("keydown", jump);

