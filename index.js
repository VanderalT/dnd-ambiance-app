const locationSelect = document.querySelector('#locationSelect');
const ambianceForm = document.querySelector('#ambianceFormContainer')

const audioForm = new AudioForm(locationSelect,ambianceForm, {
    locationChange (input) {

    }
})

const audioPlayer = new AudioPlayer(locationSelect);

//Creating the flicker candle light effect
document.addEventListener(onload, () => {
    var time = Math.random();
    var candle = document.querySelector(".ambiance-candle-anim");
    candle.style.setProperty('--animation-time',time + 's');
})

