import {validateForm} from './module/form.js';
import {setDisabledFormState, setEnabledFormState} from './module/set-page-state.js';
import {initMap} from './module/map.js';

const filterFormElement = document.querySelector('.map__filters');

validateForm();

setDisabledFormState();
initMap();
setEnabledFormState(filterFormElement);

