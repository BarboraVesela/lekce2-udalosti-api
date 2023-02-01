// tady je místo pro náš program

let text = document.querySelector('.text');

function onHover() {
    text.classList.toggle("tucne");
}
    
function zmenBarvu() {
    text.classList.toggle('cervene');
}

function zmenVelikost() {
    text.classList.add('vetsi')
}


let tlacitko = document.querySelector('.tlacitko')

function zavolejUdalost(udalost) {
    let prvek = udalost.target;
    prvek.style.hidden = 'true';
    console.log(udalost);
    console.log(prvek); 
}

let prehravac = document.querySelector('.mujPrehravac')

function spustAudio() {
    prehravac.play();
}

function zastavAudio() {
    prehravac.pause();
}

function resetAudio() {
    prehravac.currentTime = 0;
}

let currentVolume = 0.5;
function minAudio() {
    prehravac.volume = 0;
}

function origAudio() {
    prehravac.volume = currentVolume;
}

function vicAudio() {
    prehravac.volume = 1;
}

