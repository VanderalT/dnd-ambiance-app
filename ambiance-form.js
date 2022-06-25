//Set attribute function
function setAttributes(el, attrs){
    for(var key in attrs){
        el.setAttribute(key, attrs[key]);
    }
};

class AudioForm{
    constructor(locationSelect,ambianceForm, callback){
        this.locationSelect = locationSelect;
        this.ambianceForm = ambianceForm;
        this.audioContainer = document.querySelector('#audioContainer');

        if(callback){
            this.locationChange = callback.locationChange;
        }

        locationSelect.addEventListener('change',this.createForm);
    }

    createForm = () => {
        //Checks to see if there is already an audio file loaded and removes it
        if(document.querySelector('#audioPlayback')){
            this.audioContainer.removeChild(this.audioContainer.lastChild)
        }

        if(this.locationSelect.value == 'town'){
            const townAmbianceForm = document.createElement('form');
            townAmbianceForm.setAttribute('id','townAmbianceForm');
            townAmbianceForm.classList.add('town-ambiance-form');
            this.ambianceForm.appendChild(townAmbianceForm);
            
            const timeOfDay = document.createElement('h2');
            timeOfDay.innerText = 'Time Of Day';
            townAmbianceForm.appendChild(timeOfDay);
            const todDay = document.createElement('input');
            setAttributes(todDay,{
                'type' :'radio',
                'name' :'time_of_day',
                'id'   :'day',
                'value':'Day',
            })
            todDay.setAttribute('checked','true');
            townAmbianceForm.appendChild(todDay);
            const todDayLabel = document.createElement('label');
            todDayLabel.setAttribute('for','day');
            todDayLabel.innerText = 'Day';
            townAmbianceForm.appendChild(todDayLabel);
            const todNight = document.createElement('input');
            setAttributes(todNight,{
                'type' :'radio',
                'name' :'time_of_day',
                'id'   :'night',
                'value':'Night',
            });
            townAmbianceForm.appendChild(todNight);
            const todNightLabel = document.createElement('label');
            todNightLabel.setAttribute('for','night');
            todNightLabel.innerText = 'Night';
            townAmbianceForm.appendChild(todNightLabel);

            const business = document.createElement('h2');
            business.innerText = 'Business';
            townAmbianceForm.appendChild(business);
            const noBus = document.createElement('input');
            setAttributes(noBus,{
                'type' :'radio',
                'name' :'business',
                'id'   :'noneBusiness',
                'value': null
            });
            noBus.setAttribute('checked','true');
            townAmbianceForm.appendChild(noBus);
            const noBusLabel = document.createElement('label');
            noBusLabel.setAttribute('for','noneBusiness');
            noBusLabel.innerText = 'None';
            townAmbianceForm.appendChild(noBusLabel);
            const lowBus = document.createElement('input');
            setAttributes(lowBus,{
                'type' :'radio',
                'name' :'business',
                'id'   :'lowBusiness',
                'value':'Low',
            });
            townAmbianceForm.appendChild(lowBus);
            const lowBusLabel = document.createElement('label');
            lowBusLabel.setAttribute('for','lowBusiness');
            lowBusLabel.innerText = 'Low';
            townAmbianceForm.appendChild(lowBusLabel);
            const medBus = document.createElement('input');
            setAttributes(medBus,{
                'type' :'radio',
                'name' :'business',
                'id'   :'mediumBusiness',
                'value':'Medium',
            });
            townAmbianceForm.appendChild(medBus);
            const medBusLabel = document.createElement('label');
            medBusLabel.setAttribute('for','mediumBusiness');
            medBusLabel.innerText = 'Medium';
            townAmbianceForm.appendChild(medBusLabel);
            const highBus = document.createElement('input');
            setAttributes(highBus,{
                'type' :'radio',
                'name' :'business',
                'id'   :'highBusiness',
                'value':'High',
            });
            townAmbianceForm.appendChild(highBus);
            const highBusLabel = document.createElement('label');
            highBusLabel.setAttribute('for','highBusiness');
            highBusLabel.innerText = 'High';
            townAmbianceForm.appendChild(highBusLabel);
            
            const musicTown = document.createElement('h2');
            musicTown.innerText = 'Music';
            townAmbianceForm.appendChild(musicTown);
            const noMusic = document.createElement('input');
            setAttributes(noMusic,{
                'type' :'radio',
                'name' :'music',
                'id'   :'noneMusic',
                'value': null
            });
            noMusic.setAttribute('checked','true');
            townAmbianceForm.appendChild(noMusic);
            const noMusicLabel = document.createElement('label');
            noMusicLabel.setAttribute('for','noneMusic');
            noMusicLabel.innerText = 'None';
            townAmbianceForm.appendChild(noMusicLabel);
            const fightMusic = document.createElement('input');
            setAttributes(fightMusic,{
                'type' :'radio',
                'name' :'music',
                'id'   :'fightMusic',
                'value':'Fight',
            });
            townAmbianceForm.appendChild(fightMusic);
            const fightMusicLabel = document.createElement('label');
            fightMusicLabel.setAttribute('for','fightMusic');
            fightMusicLabel.innerText = 'Fight';
            townAmbianceForm.appendChild(fightMusicLabel);
            const eerieMusic = document.createElement('input');
            setAttributes(eerieMusic,{
                'type' :'radio',
                'name' :'music',
                'id'   :'eerieMusic',
                'value':'Eerie',
            });
            townAmbianceForm.appendChild(eerieMusic);
            const eerieMusicLabel = document.createElement('label');
            eerieMusicLabel.setAttribute('for','eerieMusic');
            eerieMusicLabel.innerText = 'Eerie';
            townAmbianceForm.appendChild(eerieMusicLabel);
            const victoriousMusic = document.createElement('input');
            setAttributes(victoriousMusic,{
                'type' :'radio',
                'name' :'music',
                'id'   :'victoriousMusic',
                'value':'Victorious',
            });
            townAmbianceForm.appendChild(victoriousMusic);
            const victoriousMusicLabel = document.createElement('label');
            victoriousMusicLabel.setAttribute('for','victoriousMusic');
            victoriousMusicLabel.innerText = 'Victorious';
            townAmbianceForm.appendChild(victoriousMusicLabel);

            const rainTown = document.createElement('h2');
            rainTown.innerText = 'Rain';
            townAmbianceForm.appendChild(rainTown);
            const noneRain = document.createElement('input');
            setAttributes(noneRain,{
                'type' :'radio',
                'name' :'rain',
                'id'   :'noneRain',
                'value': null
            });
            noneRain.setAttribute('checked','true');
            townAmbianceForm.appendChild(noneRain);
            const noneRainLabel = document.createElement('label');
            noneRainLabel.setAttribute('for','noneRain');
            noneRainLabel.innerText = 'None';
            townAmbianceForm.appendChild(noneRainLabel);
            const lightRain = document.createElement('input');
            setAttributes(lightRain,{
                'type' :'radio',
                'name' :'rain',
                'id'   :'lightRain',
                'value':'Light'
            });
            townAmbianceForm.appendChild(lightRain);
            const lightRainLabel = document.createElement('label');
            lightRainLabel.setAttribute('for','lightRain');
            lightRainLabel.innerText = 'Light';
            townAmbianceForm.appendChild(lightRainLabel);
            const mediumRain = document.createElement('input');
            setAttributes(mediumRain,{
                'type' :'radio',
                'name' :'rain',
                'id'   :'mediumRain',
                'value':'Medium'
            });
            townAmbianceForm.appendChild(mediumRain);
            const mediumRainLabel = document.createElement('label');
            mediumRainLabel.setAttribute('for','mediumRain');
            mediumRainLabel.innerText = 'Medium';
            townAmbianceForm.appendChild(mediumRainLabel);
            const heavyRain = document.createElement('input');
            setAttributes(heavyRain,{
                'type' :'radio',
                'name' :'rain',
                'id'   :'heavyRain',
                'value':'Heavy'
            });
            townAmbianceForm.appendChild(heavyRain);
            const heavyRainLabel = document.createElement('label');
            heavyRainLabel.setAttribute('for','heavyRain');
            heavyRainLabel.innerText = 'Heavy';
            townAmbianceForm.appendChild(heavyRainLabel);
            const thunderRain = document.createElement('input');
            setAttributes(thunderRain,{
                'type' :'radio',
                'name' :'rain',
                'id'   :'thunderRain',
                'value':'Thunder'
            });
            townAmbianceForm.appendChild(thunderRain);
            const thunderRainLabel = document.createElement('label');
            thunderRainLabel.setAttribute('for','thunderRain');
            thunderRainLabel.innerText = 'Thunder';
            townAmbianceForm.appendChild(thunderRainLabel);
            return 'town';
        }
        else{
            const formContainer = document.querySelector('#ambianceFormContainer');
            formContainer.removeChild(formContainer.lastChild);
        }
    }
}