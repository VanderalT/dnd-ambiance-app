const locationSelect = document.querySelector('#locationSelect');
const ambianceForm = document.querySelector('#ambianceFormContainer')

const audioForm = new AudioForm(locationSelect,ambianceForm, {
    locationChange (input) {

    }
})

