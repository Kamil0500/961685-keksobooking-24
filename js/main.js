import {validateForm} from './module/form.js';
import {setDisabledFormState, setEnabledFormState} from './module/set-page-state.js';
import './module/map.js';

const addFormElement = document.querySelector('.ad-form');
const filterFormElement = document.querySelector('.map__filters');

validateForm();

setDisabledFormState();
setEnabledFormState(addFormElement);
setEnabledFormState(filterFormElement);

