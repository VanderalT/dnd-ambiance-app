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

        //Creates and changes form when location updated
        if(this.locationSelect.value == 'town'){
            const townAmbianceForm = document.createElement('form');
            townAmbianceForm.setAttribute('id','townAmbianceForm');
            townAmbianceForm.classList.add('town-ambiance-form');
            this.ambianceForm.appendChild(townAmbianceForm);
            
            //SectionContainer
            const timeOfDayContainer = document.createElement('div');
            timeOfDayContainer.classList.add('form-section');
            const timeOfDayInputs = document.createElement('div');
            timeOfDayInputs.classList.add('form-inputs');
            const timeOfDay = document.createElement('h2');
            timeOfDay.innerText = 'Time Of Day';
            timeOfDayContainer.appendChild(timeOfDay);
            const todDay = document.createElement('input');
            setAttributes(todDay,{
                'type' :'radio',
                'name' :'time_of_day',
                'id'   :'day',
                'value':'Day',
            })
            todDay.setAttribute('checked','true');
            const todDayLabel = document.createElement('label');
            todDayLabel.setAttribute('for','day');
            todDayLabel.innerText = 'Day';
            const todDayContainer = document.createElement('div');
            todDayContainer.classList.add('input-container');
            todDayContainer.appendChild(todDay);
            todDayContainer.appendChild(todDayLabel);
            timeOfDayInputs.appendChild(todDayContainer);
            const todNight = document.createElement('input');
            setAttributes(todNight,{
                'type' :'radio',
                'name' :'time_of_day',
                'id'   :'night',
                'value':'Night',
            });
            const todNightLabel = document.createElement('label');
            todNightLabel.setAttribute('for','night');
            todNightLabel.innerText = 'Night';
            const todNightContainer = document.createElement('div');
            todNightContainer.classList.add('input-container');
            todNightContainer.appendChild(todNight);
            todNightContainer.appendChild(todNightLabel);
            timeOfDayInputs.appendChild(todNightContainer);
            timeOfDayContainer.appendChild(timeOfDayInputs);
            townAmbianceForm.appendChild(timeOfDayContainer);
            
            
            const businessContainer = document.createElement('div');
            businessContainer.classList.add('form-section');
            const businessInputs = document.createElement('div');
            businessInputs.classList.add('form-inputs');
            const business = document.createElement('h2');
            business.innerText = 'Business';
            businessContainer.appendChild(business);
            const noBus = document.createElement('input');
            setAttributes(noBus,{
                'type' :'radio',
                'name' :'business',
                'id'   :'noneBusiness',
                'value': null
            });
            noBus.setAttribute('checked','true');
            const noBusLabel = document.createElement('label');
            noBusLabel.setAttribute('for','noneBusiness');
            noBusLabel.innerText = 'None';
            const noBusContainer = document.createElement('div');
            noBusContainer.classList.add('input-container');
            noBusContainer.appendChild(noBus);
            noBusContainer.appendChild(noBusLabel);
            businessInputs.appendChild(noBusContainer);
            const lowBus = document.createElement('input');
            setAttributes(lowBus,{
                'type' :'radio',
                'name' :'business',
                'id'   :'lowBusiness',
                'value':'Low',
            });
            const lowBusLabel = document.createElement('label');
            lowBusLabel.setAttribute('for','lowBusiness');
            lowBusLabel.innerText = 'Low';
            const lowBusContainer = document.createElement('div');
            lowBusContainer.classList.add('input-container');
            lowBusContainer.appendChild(lowBus);
            lowBusContainer.appendChild(lowBusLabel);
            businessInputs.appendChild(lowBusContainer);
            const medBus = document.createElement('input');
            setAttributes(medBus,{
                'type' :'radio',
                'name' :'business',
                'id'   :'mediumBusiness',
                'value':'Medium',
            });
            const medBusLabel = document.createElement('label');
            medBusLabel.setAttribute('for','mediumBusiness');
            medBusLabel.innerText = 'Medium';
            const medBusContainer = document.createElement('div');
            medBusContainer.classList.add('input-container');
            medBusContainer.appendChild(medBus);
            medBusContainer.appendChild(medBusLabel);
            businessInputs.appendChild(medBusContainer);
            const highBus = document.createElement('input');
            setAttributes(highBus,{
                'type' :'radio',
                'name' :'business',
                'id'   :'highBusiness',
                'value':'High',
            });
            const highBusLabel = document.createElement('label');
            highBusLabel.setAttribute('for','highBusiness');
            highBusLabel.innerText = 'High';
            const highBusContainer = document.createElement('div');
            highBusContainer.classList.add('input-container');
            highBusContainer.appendChild(highBus);
            highBusContainer.appendChild(highBusLabel);
            businessInputs.appendChild(highBusContainer);
            businessContainer.appendChild(businessInputs);
            townAmbianceForm.appendChild(businessContainer);
            

            const musicContainer = document.createElement('div');
            musicContainer.classList.add('form-section');
            const musicInputs = document.createElement('div');
            musicInputs.classList.add('form-inputs');
            const musicTown = document.createElement('h2');
            musicTown.innerText = 'Music';
            musicContainer.appendChild(musicTown);
            const noMusic = document.createElement('input');
            setAttributes(noMusic,{
                'type' :'radio',
                'name' :'music',
                'id'   :'noneMusic',
                'value': null
            });
            noMusic.setAttribute('checked','true');
            const noMusicLabel = document.createElement('label');
            noMusicLabel.innerText = 'None';
            noMusicLabel.setAttribute('for','noneMusic');
            const noMusicContainer = document.createElement('div');
            noMusicContainer.classList.add('input-container');
            noMusicContainer.appendChild(noMusic);
            noMusicContainer.appendChild(noMusicLabel);
            musicInputs.appendChild(noMusicContainer);
            const fightMusic = document.createElement('input');
            setAttributes(fightMusic,{
                'type' :'radio',
                'name' :'music',
                'id'   :'fightMusic',
                'value':'Fight',
            });
            const fightMusicLabel = document.createElement('label');
            fightMusicLabel.setAttribute('for','fightMusic');
            fightMusicLabel.innerText = 'Fight';
            const fightMusicContainer = document.createElement('div');
            fightMusicContainer.classList.add('input-container');
            fightMusicContainer.appendChild(fightMusic);
            fightMusicContainer.appendChild(fightMusicLabel);
            musicInputs.appendChild(fightMusicContainer);
            const eerieMusic = document.createElement('input');
            setAttributes(eerieMusic,{
                'type' :'radio',
                'name' :'music',
                'id'   :'eerieMusic',
                'value':'Eerie',
            });
            const eerieMusicLabel = document.createElement('label');
            eerieMusicLabel.setAttribute('for','eerieMusic');
            eerieMusicLabel.innerText = 'Eerie';
            const eerietMusicContainer = document.createElement('div');
            eerietMusicContainer.classList.add('input-container');
            eerietMusicContainer.appendChild(eerieMusic);
            eerietMusicContainer.appendChild(eerieMusicLabel);
            musicInputs.appendChild(eerietMusicContainer);
            const victoriousMusic = document.createElement('input');
            setAttributes(victoriousMusic,{
                'type' :'radio',
                'name' :'music',
                'id'   :'victoriousMusic',
                'value':'Victorious',
            });
            const victoriousMusicLabel = document.createElement('label');
            victoriousMusicLabel.setAttribute('for','victoriousMusic');
            victoriousMusicLabel.innerText = 'Victorious';
            const victoriousMusicContainer = document.createElement('div');
            victoriousMusicContainer.classList.add('input-container');
            victoriousMusicContainer.appendChild(victoriousMusic);
            victoriousMusicContainer.appendChild(victoriousMusicLabel);
            musicInputs.appendChild(victoriousMusicContainer);
            musicContainer.appendChild(musicInputs);
            townAmbianceForm.appendChild(musicContainer);

            const rainContainer = document.createElement('div');
            rainContainer.classList.add('form-section');
            const rainInputs = document.createElement('div');
            rainInputs.classList.add('form-inputs');
            const rainTown = document.createElement('h2');
            rainTown.innerText = 'Rain';
            rainContainer.appendChild(rainTown);
            const noneRain = document.createElement('input');
            setAttributes(noneRain,{
                'type' :'radio',
                'name' :'rain',
                'id'   :'noneRain',
                'value': null
            });
            noneRain.setAttribute('checked','true');
            const noneRainLabel = document.createElement('label');
            noneRainLabel.setAttribute('for','noneRain');
            noneRainLabel.innerText = 'None';
            const noneRainContainer = document.createElement('div');
            noneRainContainer.classList.add('input-container');
            noneRainContainer.appendChild(noneRain);
            noneRainContainer.appendChild(noneRainLabel);
            rainInputs.appendChild(noneRainContainer);
            const lightRain = document.createElement('input');
            setAttributes(lightRain,{
                'type' :'radio',
                'name' :'rain',
                'id'   :'lightRain',
                'value':'Light'
            });
            const lightRainLabel = document.createElement('label');
            lightRainLabel.setAttribute('for','lightRain');
            lightRainLabel.innerText = 'Light';
            const lightRainContainer = document.createElement('div');
            lightRainContainer.classList.add('input-container');
            lightRainContainer.appendChild(lightRain);
            lightRainContainer.appendChild(lightRainLabel);
            rainInputs.appendChild(lightRainContainer);
            const mediumRain = document.createElement('input');
            setAttributes(mediumRain,{
                'type' :'radio',
                'name' :'rain',
                'id'   :'mediumRain',
                'value':'Medium'
            });
            const mediumRainLabel = document.createElement('label');
            mediumRainLabel.setAttribute('for','mediumRain');
            mediumRainLabel.innerText = 'Medium';
            const mediumRainContainer = document.createElement('div');
            mediumRainContainer.classList.add('input-container');
            mediumRainContainer.appendChild(mediumRain);
            mediumRainContainer.appendChild(mediumRainLabel);
            rainInputs.appendChild(mediumRainContainer);
            const heavyRain = document.createElement('input');
            setAttributes(heavyRain,{
                'type' :'radio',
                'name' :'rain',
                'id'   :'heavyRain',
                'value':'Heavy'
            });
            const heavyRainLabel = document.createElement('label');
            heavyRainLabel.setAttribute('for','heavyRain');
            heavyRainLabel.innerText = 'Heavy';
            const heavyRainContainer = document.createElement('div');
            heavyRainContainer.classList.add('input-container');
            heavyRainContainer.appendChild(heavyRain);
            heavyRainContainer.appendChild(heavyRainLabel);
            rainInputs.appendChild(heavyRainContainer);
            const thunderRain = document.createElement('input');
            setAttributes(thunderRain,{
                'type' :'radio',
                'name' :'rain',
                'id'   :'thunderRain',
                'value':'Thunder'
            });
            const thunderRainLabel = document.createElement('label');
            thunderRainLabel.setAttribute('for','thunderRain');
            thunderRainLabel.innerText = 'Thunder';
            const thunderRainContainer = document.createElement('div');
            thunderRainContainer.classList.add('input-container');
            thunderRainContainer.appendChild(thunderRain);
            thunderRainContainer.appendChild(thunderRainLabel);
            rainInputs.appendChild(thunderRainContainer);
            rainContainer.appendChild(rainInputs);
            townAmbianceForm.appendChild(rainContainer);

            const windContainer = document.createElement('div');
            windContainer.classList.add('form-section');
            const windInputs = document.createElement('div');
            windInputs.classList.add('form-inputs');
            const windTown = document.createElement('h2');
            windTown.innerText = 'Wind';
            windContainer.appendChild(windTown);
            const noneWind = document.createElement('input');
            setAttributes(noneWind, {
                'type': 'radio',
                'name': 'wind',
                'id': 'noneWind',
                'value': null
            });
            noneWind.setAttribute('checked', 'true');
            const noneWindLabel = document.createElement('label');
            noneWindLabel.setAttribute('for', 'noneWind');
            noneWindLabel.innerText = 'None';
            const noWindContainer = document.createElement('div');
            noWindContainer.classList.add('input-container');
            noWindContainer.appendChild(noneWind);
            noWindContainer.appendChild(noneWindLabel);
            windInputs.appendChild(noWindContainer);
            const lightWind = document.createElement('input');
            setAttributes(lightWind, {
                'type': 'radio',
                'name': 'wind',
                'id': 'lightWind',
                'value': 'Light'
            });
            const lightWindLabel = document.createElement('label');
            lightWindLabel.setAttribute('for', 'lightWind');
            lightWindLabel.innerText = 'Light';
            const lightWindContainer = document.createElement('div');
            lightWindContainer.classList.add('input-container');
            lightWindContainer.appendChild(lightWind);
            lightWindContainer.appendChild(lightWindLabel);
            windInputs.appendChild(lightWindContainer);
            const mediumWind = document.createElement('input');
            setAttributes(mediumWind, {
                'type': 'radio',
                'name': 'wind',
                'id': 'mediumWind',
                'value': 'Medium'
            });
            const mediumWindLabel = document.createElement('label');
            mediumWindLabel.setAttribute('for', 'mediumWind');
            mediumWindLabel.innerText = 'Medium';
            const mediumWindContainer = document.createElement('div');
            mediumWindContainer.classList.add('input-container');
            mediumWindContainer.appendChild(mediumWind);
            mediumWindContainer.appendChild(mediumWindLabel);
            windInputs.appendChild(mediumWindContainer);
            const highWind = document.createElement('input');
            setAttributes(highWind, {
                'type': 'radio',
                'name': 'wind',
                'id': 'highWind',
                'value': 'High'
            });
            const highWindLabel = document.createElement('label');
            highWindLabel.setAttribute('for', 'highWind');
            highWindLabel.innerText = 'Heavy';
            const highWindContainer = document.createElement('div');
            highWindContainer.classList.add('input-container');
            highWindContainer.appendChild(highWind);
            highWindContainer.appendChild(highWindLabel);
            windInputs.appendChild(highWindContainer);
            windContainer.appendChild(windInputs);
            townAmbianceForm.appendChild(windContainer);

            return 'town';
        } 
        // else if ( this.locationSelect.value == 'harbour'){
        // } else if (this.locationSelect.value == 'sewer'){
        // }
        else{
            const formContainer = document.querySelector('#ambianceFormContainer');
            formContainer.removeChild(formContainer.lastChild);
        }
    }
}