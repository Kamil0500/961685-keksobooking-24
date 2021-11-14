import {setActivateFormState} from './set-forms-state.js';
import {initFormValidation, changePriceInputState, changeRoomQuantityInputState} from './form-validation.js';
import {sendData} from './api-service.js';
import {sendSuccessHandler} from './send-success-handler.js';
import {sendErrorHandler} from './error-action-handler.js';
import {setPinMarkerStartState} from './map.js';
import {clearImgBlocks, addChooserInputsListeners} from './load-photo.js';

const addForm = document.querySelector('.ad-form');
const filter = document.querySelector('.map__filters');

const addFormSubmitHandler = (evt) => {
  evt.preventDefault();
  sendData(sendSuccessHandler, sendErrorHandler, new FormData(evt.target));
};

export const resetFilter = () => {
  filter.reset();
  const event = new Event('change');
  filter.dispatchEvent(event);
};

export const resetAddForm  = () => {
  setPinMarkerStartState();
  changePriceInputState();
  changeRoomQuantityInputState();
  clearImgBlocks();
};

const addFormResetHandler  = () => {
  setTimeout(() => {
    resetAddForm();
    resetFilter();
  });
};

export const activateAdForm = () => {
  setActivateFormState(addForm);
  initFormValidation();
  addChooserInputsListeners();
  addForm.addEventListener('submit', addFormSubmitHandler);
  addForm.addEventListener('reset', addFormResetHandler);
};
