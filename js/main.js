import {cardListFragment} from './module/generation-elements.js';
import {validateForm} from './module/form.js';
import {setDisabledFormState, setEnabledFormState} from './module/set-page-state.js';

const mapCanvas = document.querySelector('#map-canvas');
const addFormElement = document.querySelector('.ad-form');
const filterFormElement = document.querySelector('.map__filters');
mapCanvas.appendChild(cardListFragment);

validateForm();

setDisabledFormState();
setEnabledFormState(addFormElement);
setEnabledFormState(filterFormElement);

