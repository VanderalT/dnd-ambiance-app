const locationSelect = document.querySelector('#locationSelect');
const ambienceForm = document.querySelector('#ambienceFormContainer')

const audioForm = new AudioForm(locationSelect,ambienceForm, {
    locationChange (input) {

    }
})

const audioPlayer = new AudioPlayer(locationSelect);

//Creating the flicker candle light effect
document.addEventListener(onload, () => {
    var time = Math.random();
    var candle = document.querySelector(".ambience-candle-anim");
    candle.style.setProperty('--animation-time',time + 's');
})

