class AudioPlayer {
    constructor(locationSelect){
        this.locationSelect = locationSelect;

        const playButton = document.querySelector('#ambiancePlayButton');


        if(locationSelect.value == 'town'){
            this.timeOfDayInputs = document.getElementsByName('time_of_day');
            this.businessInputs = document.getElementsByName('business');
            this.musicInputs = document.getElementsByName('music');
            this.rainInputs = document.getElementsByName('rain');
        }


        playButton.addEventListener('click', this.playbackAudio);
    }

    playbackAudio = () => {
        
        if(this.locationSelect.value == 'town'){
            for(const input of this.timeOfDayInputs){
                if(input.checked == true){
                    console.log(input.value)
                }
            }
        }

    }
}