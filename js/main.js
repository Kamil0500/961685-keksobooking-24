import {cardListFragment} from './module/generation-elements.js';
import {validateForm} from './module/form.js';
import {disabledFormElements, enableFormElements} from './module/set-page-state.js';

const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(cardListFragment);

validateForm();
disabledFormElements();
enableFormElements();
