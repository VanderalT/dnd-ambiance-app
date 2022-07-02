class AudioPlayer {
    constructor(locationSelect){
        this.locationSelect = locationSelect;

        this.playButton = document.querySelector('#ambiencePlayButton');
        this.pauseButton = document.querySelector('#ambiencePauseButton');
        this.audioContainer = document.querySelector('#audioContainer');

        this.playButton.addEventListener('click', this.playbackAudio);
        this.pauseButton.addEventListener('click',this.pauseAudio);
        this.setAudioObject = {};
    }

    playbackAudio = () => {

        //Checks to see if there is already an audio file loaded and removes it
        if(document.querySelector('#audioPlayback')){
            this.audioContainer.removeChild(this.audioContainer.lastChild)
        }

        //Exits function if location is not chosen
        if(this.locationSelect.value == 'empty'){
            return;
        }
        
        //Creates a new div for all of the audio elements to be put into
        const audioPlayback = document.createElement('div');
        audioPlayback.setAttribute('id','audioPlayback');
        this.audioContainer.appendChild(audioPlayback);

        let audioArray = {};
        if(this.locationSelect.value == 'town'){
            this.timeOfDayInputs = document.getElementsByName('time_of_day');
            this.businessInputs = document.getElementsByName('business');
            this.musicInputs = document.getElementsByName('music');
            this.rainInputs = document.getElementsByName('rain');
            this.windInputs = document.getElementsByName('wind');

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
                    var music = true;
                }
            };

            for(const input of this.rainInputs){
                if(input.checked){
                    audioArray.townRain = input.value
                }
            };

            for(const input of this.windInputs){
                if(input.checked){
                    audioArray.townWind = input.value
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
                if(music){
                    audioEntry.setAttribute('loop','false');
                } else {
                    audioEntry.setAttribute('loop','true');
                }
                audioPlayback.appendChild(audioEntry);
            }
        }

        document.querySelectorAll('audio').forEach(el => el.play());
    }

    pauseAudio = () => {
        document.querySelectorAll('audio').forEach(el => el.pause());
    }
}