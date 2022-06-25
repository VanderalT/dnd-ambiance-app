class AudioPlayer {
    constructor(locationSelect){
        this.locationSelect = locationSelect;

        this.playButton = document.querySelector('#ambiancePlayButton');
        this.pauseButton = document.querySelector('#ambiancePauseButton');
        this.audioContainer = document.querySelector('#audioContainer');

        this.playButton.addEventListener('click', this.playbackAudio);
        this.pauseButton.addEventListener('click',this.pauseAudio);
    }

    playbackAudio = () => {
        //Checks to see if there is already audio loaded and plays if so
        if(document.querySelector('#audioPlayback')){
            document.querySelectorAll('audio').forEach(el => el.play());
            return;
        }
        
        //Exits function if location is not chosen
        if(this.locationSelect.value == 'empty'){
            return;
        }
        
        //Creates a new div for all of the audio elements
        const audioPlayback = document.createElement('div');
        audioPlayback.setAttribute('id','audioPlayback');
        this.audioContainer.appendChild(audioPlayback);

        let audioArray = {};
        if(this.locationSelect.value == 'town'){
            this.timeOfDayInputs = document.getElementsByName('time_of_day');
            this.businessInputs = document.getElementsByName('business');
            this.musicInputs = document.getElementsByName('music');
            this.rainInputs = document.getElementsByName('rain');

            for(const input of this.timeOfDayInputs){
                if(input.checked){
                    audioArray.townTimeOfDay = input.value;
                }
            };

            for(const input of this.businessInputs){
                if(input.checked){
                    audioArray.townBusiness = input.value
                }
            };

            for(const input of this.musicInputs){
                if(input.checked){
                    audioArray.townMusic = input.value
                }
            };

            for(const input of this.rainInputs){
                if(input.checked){
                    audioArray.townRain = input.value
                }
            };
        }

        // Creates a new audio element for each entry chosen on form other than null
        // Audio naming convention =
        // ./sound-files/location + typeofsound + variableofsound.mp3
        for(const audioArrayEntry of Object.entries(audioArray)){
            if(!audioArrayEntry.includes('null')){
                const audioEntry = document.createElement('audio');
                audioEntry.setAttribute('src',`./sound-files/${audioArrayEntry[0]}${audioArrayEntry[1]}.mp3`);
                audioPlayback.appendChild(audioEntry);
            }
        }

        document.querySelectorAll('audio').forEach(el => el.play());
    }

    pauseAudio = () => {
        document.querySelectorAll('audio').forEach(el => el.pause());
    }
}